const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';
const DEEPSEEK_MODEL = 'deepseek-chat';

const systemPrompt = `Tu es un conseiller expert en bilan de compétences et orientation professionnelle, avec 20 ans d'expérience.
Tu analyses les réponses pour produire un rapport personnalisé, précis et actionnable.

RÈGLES ABSOLUES — TOUTE VIOLATION REND LE RAPPORT INVALIDE :

1. BIG FIVE OBLIGATOIRE : Fournis les 5 scores (Ouverture, Conscienciosité, Extraversion, Agréabilité, Névrosisme) entre 0 et 100. Si indéterminé, mets 50.

2. CODES ROME OBLIGATOIRES : Pour chaque métier, code ROME valide (1 lettre + 4 chiffres). Utilise UNIQUEMENT : M1805, M1806, M1802, M1801, M1403, M1703, M1705, M1402, K2111, K1401, K1201, K1802, E1104, M1302, K1101.

3. CODES RS OBLIGATOIRES : Pour chaque formation CPF, code RS + 4 chiffres. Utilise UNIQUEMENT : RS1234, RS5678, RS9012, RS3456, RS7890, RS2345, RS6789, RS1122, RS3344, RS5566.

4. DURÉES RÉALISTES : Formation certifiante = 2-24 mois. Certification courte (Scrum, PSPO) = 2-5 JOURS (pas 200 mois !). JAMAIS > 36 mois.

5. COÛTS RÉALISTES : Formation courte = 800-2000€. Formation certifiante = 2000-8000€. JAMAIS > 15000€. Jamais "0€ (abonnement 20€/mois)" contradictoire → écris "À partir de 20€/mois (non éligible CPF)".

6. SALAIRES RÉALISTES (France 2025) : Junior 24-35k€, Confirmé 32-50k€, Senior 45-75k€, Expert 60-100k€.

7. TENDANCES STANDARDISÉES : "Forte croissance", "Croissance", "Stable", "En transformation", "En déclin". Pas de pourcentages obscurs.

8. SCORES COHÉRENTS : Les 10 scores de domaine doivent être cohérents entre eux et avec les Big Five.

9. PLAN D'ACTION STRUCTURÉ : Chaque étape avec semaine, action concrète, ressource (URL ou organisme).

10. PERSONNALISATION : Chaque recommandation justifiée par les réponses. Pas de texte générique.

Tu réponds UNIQUEMENT avec un objet JSON valide, sans texte avant ni après. Pas de markdown, pas de backticks.`;

export async function analyzeWithAI(
  prompt: string,
  maxTokens: number = 4096
): Promise<string> {
  const response = await fetch(DEEPSEEK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: DEEPSEEK_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      max_tokens: maxTokens,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DeepSeek API error (${response.status}): ${errorText.substring(0, 500)}`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content || '';

  console.log('DeepSeek response length:', text.length);

  // Extract JSON from potential markdown code blocks
  const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const extracted = jsonMatch ? jsonMatch[1].trim() : text.trim();

  if (!extracted || extracted.length < 10) {
    throw new Error(`Réponse DeepSeek invalide ou vide: "${text.substring(0, 500)}"`);
  }

  return extracted;
}

export async function analyzeCVWithAI(
  cvText: string,
  assessmentProfile: string
): Promise<string> {
  const prompt = `Analyse ce CV et croise-le avec le profil d'évaluation suivant :

PROFIL DU BILAN DE COMPÉTENCES :
${assessmentProfile}

TEXTE DU CV :
${cvText}

Fournis une analyse de croisement en JSON avec le format exact suivant :
{
  "summary": "résumé de l'adéquation entre le CV et le profil",
  "keySkills": ["compétence clé 1", "compétence clé 2", ...],
  "experienceLevel": "junior|intermediaire|senior|expert",
  "educationMatch": "analyse de la correspondance formation/parcours",
  "recommendations": ["recommandation 1", "recommandation 2", ...],
  "matchingCareers": [
    {
      "title": "nom du métier",
      "description": "pourquoi ce métier correspond",
      "relevance": "Très élevée|Élevée|Moyenne",
      "salary_range": "fourchette salariale",
      "trend": "tendance du marché",
      "matchingScore": 85
    }
  ],
  "matchingFormations": [
    {
      "title": "nom de la formation",
      "provider": "organisme",
      "duration": "durée",
      "cost": "coût",
      "eligibleCPF": true,
      "matchingScore": 90,
      "rsCode": "RSXXXX",
      "url": "https://www.francecompetences.fr/...",
      "description": "description de la formation"
    }
  ]
}`;

  return analyzeWithAI(prompt, 4096);
}
