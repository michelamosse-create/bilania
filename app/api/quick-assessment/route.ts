import { NextRequest, NextResponse } from 'next/server';
import { analyzeWithAI } from '@/lib/ai';
import { FREE_QUESTIONS } from '@/constants/questions';

export async function POST(req: NextRequest) {
  try {
    const { answers } = await req.json();
    if (!answers || typeof answers !== 'object') {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    const formatted = FREE_QUESTIONS.map((q) => ({
      id: q.id,
      cat: q.category,
      v: answers[q.id],
    }));

    const prompt = `Tu es un psychologue du travail expert en orientation et bilan de compétences.

Réponses d'une personne à 12 questions (échelle 1-5):
${JSON.stringify(formatted)}

Questions:
${FREE_QUESTIONS.map(q => `- [${q.id}] ${q.text}`).join('\n')}

IMPORTANT: Cette personne peut venir de N'IMPORTE QUEL SECTEUR. Les métiers suggérés doivent correspondre à SA personnalité, pas forcément au numérique.

Calcule Big Five (0-100) et RIASEC (0-100). Fournis UNIQUEMENT ce JSON:
{
  "summary": "Analyse personnalisée 4-5 phrases. Pas de texte générique. Mentionne des traits spécifiques.",
  "profileType": "Innovateur|Analyste|Bâtisseur|Communicant|Créateur|Explorateur|Coordinateur|Visionnaire|Gardien|Facilitateur|Pionnier|Architecte",
  "bigFive": {"openness":70,"conscientiousness":65,"extraversion":50,"agreeableness":60,"neuroticism":35},
  "riasec": {"realistic":50,"investigative":70,"artistic":40,"social":55,"enterprising":45,"conventional":60},
  "digitalAffinity": "beginner|intermediate|advanced|expert",
  "topStrength": "force spécifique avec exemple concret",
  "topWeakness": "axe d'amélioration avec suggestion",
  "teaserCareer": {
    "title": "métier (tous secteurs possibles)",
    "description": "pourquoi CE métier pour CETTE personne",
    "relevance": "Élevée|Moyenne",
    "salary_range": "XXk€-XXk€",
    "matchingScore": 85,
    "rome": "CODE_ROME"
  },
  "hiddenCareersCount": 4
}`;

    const result = await analyzeWithAI(prompt, 2048);
    const data = JSON.parse(result);
    // Ensure bigFive is always present
    if (!data.bigFive) data.bigFive = { openness: 60, conscientiousness: 65, extraversion: 50, agreeableness: 60, neuroticism: 35 };
    if (!data.riasec) data.riasec = { realistic: 50, investigative: 70, artistic: 40, social: 55, enterprising: 45, conventional: 60 };
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur analyse rapide:', error);
    return NextResponse.json({ error: "Erreur lors de l'analyse." }, { status: 500 });
  }
}
