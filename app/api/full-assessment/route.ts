import { NextRequest, NextResponse } from 'next/server';
import { analyzeWithAI } from '@/lib/ai';
import { ALL_QUESTIONS, OPEN_ENDED_QUESTIONS } from '@/constants/questions';

export async function POST(req: NextRequest) {
  try {
    const { answers, openAnswers, cvText } = await req.json();

    if (!answers || typeof answers !== 'object') {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    const compact = ALL_QUESTIONS.map((q) => ({ id: q.id, cat: q.category, v: answers[q.id] }));

    const openSection = openAnswers ? `
RÉPONSES AUX QUESTIONS RÉDACTIONNELLES (texte libre):
${OPEN_ENDED_QUESTIONS.map(q => `[${q.id}] ${q.text}\nRÉPONSE: ${openAnswers[q.id] || 'Pas de réponse'}\n`).join('\n')}` : '';

    const cvSection = cvText ? `
CV DU CANDIDAT (texte extrait):
${cvText.substring(0, 3000)}
` : '';

    const prompt = `Tu es un psychologue du travail expert en orientation professionnelle et bilan de compétences. Tu aides des personnes en reconversion à trouver LEUR voie, quel que soit le secteur.

RÉPONSES AU QUESTIONNAIRE (${ALL_QUESTIONS.length} questions, échelle 1-5):
${JSON.stringify(compact)}

QUESTIONS:
${ALL_QUESTIONS.map(q => `[${q.id}] (${q.category}) ${q.text}`).join('\n')}
${openSection}
${cvSection}

IMPORTANT: Le candidat peut venir de N'IMPORTE QUEL SECTEUR (secrétariat, BTP, santé, commerce, industrie, etc.) et peut s'orienter vers N'IMPORTE QUEL SECTEUR (pas seulement le numérique). Analyse sa personnalité, ses valeurs, ses compétences et son parcours pour lui proposer les métiers qui lui correspondent VRAIMENT, qu'ils soient dans le numérique, le médical, le social, l'artisanat, l'éducation, le commerce ou tout autre domaine.

Calcule:
- Big Five (0-100): openness, conscientiousness, extraversion, agreeableness, neuroticism
- RIASEC (0-100): realistic, investigative, artistic, social, enterprising, conventional
- 10 scores de domaine (/5)
- 5 métiers variés et pertinents (pas seulement tech)
- 3 formations CPF

Fournis UNIQUEMENT ce JSON:
{
  "summary": "Analyse PROFONDÉMENT personnalisée (6-7 phrases). Inclus une section 'Analyse de vos réponses rédactionnelles' qui décrypte ce que révèlent ses réussites, ses rêves et ses obstacles. Mentionne des patterns spécifiques. Donne des insights que la personne n'aurait pas devinés.",
  "profileType": "Innovateur|Analyste Stratégique|Bâtisseur|Communicant|Créateur|Explorateur|Coordinateur|Visionnaire|Gardien|Facilitateur|Pionnier|Architecte",
  "bigFive": {"openness":70,"conscientiousness":65,"extraversion":50,"agreeableness":60,"neuroticism":35},
  "riasec": {"realistic":50,"investigative":70,"artistic":40,"social":55,"enterprising":45,"conventional":60},
  "digitalAffinity": "beginner|intermediate|advanced|expert",
  "strengths": ["5 forces SPÉCIFIQUES avec exemples tirés des réponses"],
  "areasForImprovement": ["3 axes avec suggestions concrètes"],
  "domainScores": [10 objets: domain,label,score(max5),interpretation],
  "careerSuggestions": [
    {
      "title": "métier (pas forcément tech)",
      "description": "pourquoi CE métier pour CETTE personne",
      "relevance": "Très élevée|Élevée|Moyenne",
      "salary_range": "XXk€-XXk€",
      "trend": "Forte croissance|Croissance|Stable|En transformation",
      "matchingScore": 88,
      "rome": "CODE_ROME",
      "skillsMatch": ["compétence 1", "compétence 2"],
      "formationPath": "parcours recommandé"
    }
  ],
  "cpfFormations": [
    {
      "title": "formation",
      "provider": "organisme",
      "duration": "X mois",
      "cost": "X €",
      "eligibleCPF": true,
      "matchingScore": 90,
      "rsCode": "RSXXXX",
      "url": "https://www.francecompetences.fr/recherche/rs/XXXX/",
      "description": "bénéfices pour cette personne"
    }
  ],
  "skillsRadarData": [
    {"subject":"Relationnel","A":3.5,"fullMark":5},
    {"subject":"Analyse","A":4,"fullMark":5},
    {"subject":"Créativité","A":3,"fullMark":5},
    {"subject":"Organisation","A":3.5,"fullMark":5},
    {"subject":"Adaptabilité","A":4,"fullMark":5}
  ]
}
5 métiers VARIÉS couvrant différents secteurs si pertinent. 3 formations CPF réelles. PERSONNALISE au maximum.`;

    const result = await analyzeWithAI(prompt, 8192);
    const data = JSON.parse(result);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur analyse complète:', error);
    return NextResponse.json({ error: "Erreur lors de l'analyse." }, { status: 500 });
  }
}
