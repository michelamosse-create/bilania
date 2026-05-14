const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';
const DEEPSEEK_MODEL = 'deepseek-chat';

const systemPrompt = `Tu es un expert en bilan de compétences et en orientation professionnelle.
Tu analyses les réponses des utilisateurs pour les orienter vers des métiers, notamment dans le numérique.
Tu fournis toujours des réponses en JSON valide, structuré exactement comme demandé.
Tu es bienveillant, précis, et tu t'appuies sur le référentiel ROME (France Travail) et le Répertoire Spécifique (France Compétences) pour les métiers et formations.
Tu réponds UNIQUEMENT avec le JSON demandé, sans texte avant ni après.`;

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
