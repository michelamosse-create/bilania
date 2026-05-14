import { NextRequest, NextResponse } from 'next/server';
import { analyzeWithAI } from '@/lib/ai';
import { ALL_QUESTIONS, OPEN_ENDED_QUESTIONS, EXTENDED_OPEN_QUESTIONS } from '@/constants/questions';

function fixSpacing(text: string): string {
  if (!text) return '';
  return text
    .replace(/\*\*/g, '') // remove markdown bold
    .replace(/([a-zà-ü])\.([A-ZÀ-Ü])/g, '$1. $2') // add space after period
    .replace(/([a-zà-ü]),([A-ZÀ-Ü])/g, '$1, $2') // add space after comma
    .replace(/([a-zà-ü])([A-ZÀ-Ü])/g, '$1 $2') // add space between lowercase-uppercase
    .replace(/\s+/g, ' ') // normalize spaces
    .trim();
}

function validateReport(report: any) {
  const clamp = (v: number, min: number, max: number, fallback: number) =>
    isNaN(v) || v < min || v > max ? fallback : Math.round(v);

  return {
    summary: fixSpacing(report?.summary || ''),
    profileType: fixSpacing(report?.profileType || 'Analyste'),
    strengths: (report?.strengths || []).map(fixSpacing),
    areasForImprovement: (report?.areasForImprovement || []).map(fixSpacing),
    bigFive: {
      openness: clamp(report?.bigFive?.openness, 0, 100, 60),
      conscientiousness: clamp(report?.bigFive?.conscientiousness, 0, 100, 65),
      extraversion: clamp(report?.bigFive?.extraversion, 0, 100, 50),
      agreeableness: clamp(report?.bigFive?.agreeableness, 0, 100, 60),
      neuroticism: clamp(report?.bigFive?.neuroticism, 0, 100, 35),
    },
    careerSuggestions: (report?.careerSuggestions || []).slice(0, 5).map((c: any, i: number) => ({
      title: fixSpacing(c.title || `Métier ${i + 1}`),
      description: fixSpacing(c.description || ''),
      relevance: fixSpacing(c.relevance || 'Élevée'),
      salary_range: fixSpacing(c.salary_range || '30k€-50k€'),
      trend: ['Forte croissance', 'Croissance', 'Stable', 'En transformation', 'En déclin'].includes(c.trend) ? c.trend : 'Croissance',
      matchingScore: clamp(c.matchingScore, 50, 100, 85 - i * 5),
      rome: (c.rome || 'M1805').toUpperCase().match(/^[A-Z]\d{4}$/) ? c.rome.toUpperCase() : 'M1805',
      skillsMatch: (c.skillsMatch || []).slice(0, 4).map(fixSpacing),
      formationPath: fixSpacing(c.formationPath || ''),
    })),
    cpfFormations: (report?.cpfFormations || []).slice(0, 3).map((f: any, i: number) => {
      const rs = (f.rsCode || 'RS1234').toUpperCase().replace(/[^A-Z0-9]/g, '').match(/^RS\d{4}$/) ? f.rsCode : 'RS1234';
      let duree = f.duration || '6 mois';
      const mois = parseInt(duree);
      if (mois > 48) duree = '3 jours';
      if (duree.length > 30) duree = duree.substring(0, 30);
      let cout = clamp(f.cost ? parseInt(f.cost) : 3000, 0, 15000, 3000);
      return {
        title: fixSpacing(f.title || `Formation ${i + 1}`),
        provider: fixSpacing(f.provider || 'Organisme certifié'),
        duration: fixSpacing(duree),
        cost: `${cout} €`,
        eligibleCPF: true,
        matchingScore: clamp(f.matchingScore, 50, 100, 85 - i * 5),
        rsCode: rs,
        url: f.url || `https://www.francecompetences.fr/recherche/?query=${rs}`,
        description: fixSpacing(f.description || ''),
      };
    }),
    planAction: (report?.planAction || []).slice(0, 5).map((a: any, i: number) => {
      if (typeof a === 'string') return { semaine: (i + 1) * 2, action: fixSpacing(a), ressource: '' };
      return {
        semaine: clamp(a.semaine || a.week, 1, 52, (i + 1) * 2),
        action: fixSpacing(a.action || `Étape ${i + 1}`),
        ressource: fixSpacing(a.ressource || a.ressource || ''),
      };
    }),
  };
}

export async function POST(req: NextRequest) {
  try {
    const { answers, openAnswers, cvText } = await req.json();
    if (!answers || typeof answers !== 'object') {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    const compact = ALL_QUESTIONS.map((q) => ({ id: q.id, cat: q.category, v: answers[q.id] }));

    const allOpenQuestions = [...OPEN_ENDED_QUESTIONS, ...EXTENDED_OPEN_QUESTIONS];
    const openSection = openAnswers ? `
RÉPONSES AUX QUESTIONS RÉDACTIONNELLES :
${allOpenQuestions.map(q => `[${q.id}] ${q.text}\nRÉPONSE: ${openAnswers[q.id] || 'Pas de réponse'}`).join('\n\n')}` : '';

    const cvSection = cvText ? `\nCV DU CANDIDAT:\n${cvText.substring(0, 3000)}\n` : '';

    const prompt = `Bilan de compétences — ${ALL_QUESTIONS.length} questions.

RÉPONSES:
${JSON.stringify(compact)}

QUESTIONS:
${ALL_QUESTIONS.map(q => `[${q.id}] ${q.text}`).join('\n')}
${openSection}
${cvSection}

Fournis UN JSON avec :
{
  "summary": "Analyse personnalisée 6-7 phrases. Mentionne des éléments SPÉCIFIQUES du profil.",
  "profileType": "Innovateur|Analyste Stratégique|Bâtisseur|Communicant|Créateur|Explorateur|Coordinateur|Visionnaire|Gardien|Facilitateur|Pionnier|Architecte",
  "bigFive": {"openness":60,"conscientiousness":65,"extraversion":50,"agreeableness":60,"neuroticism":35},
  "riasec": {"realistic":50,"investigative":70,"artistic":40,"social":55,"enterprising":45,"conventional":60},
  "digitalAffinity": "beginner|intermediate|advanced|expert",
  "strengths": ["5 forces spécifiques avec exemples tirés des réponses"],
  "areasForImprovement": ["3 axes avec suggestions"],
  "domainScores": [10 objets: domain,label,score(max5),interpretation],
  "careerSuggestions": [5 métiers avec title,description,relevance,salary_range,trend(Forte croissance|Croissance|Stable|En transformation|En déclin),matchingScore,rome(CODE EXACT),skillsMatch,formationPath],
  "cpfFormations": [3 formations avec title,provider,duration(JAMAIS>36mois, PSPO=2-5jours),cost(800-8000€),eligibleCPF,matchingScore,rsCode(RS+4chiffres),url,description],
  "planAction": [{"semaine":1,"action":"Contacter 3 pros sur LinkedIn","ressource":"https://linkedin.com"}, ...],
  "skillsRadarData": [5 objets: subject(Relationnel|Analyse|Créativité|Organisation|Adaptabilité),A(max5),fullMark:5]
}
5 métiers. 3 formations. 4 étapes plan action MINIMUM. Sois PRÉCIS.`;

    const result = await analyzeWithAI(prompt, 8192);
    const data = JSON.parse(result);
    const validated = validateReport(data);
    return NextResponse.json(validated);
  } catch (error) {
    console.error('Erreur analyse complète:', error);
    return NextResponse.json({ error: "Erreur lors de l'analyse." }, { status: 500 });
  }
}
