
import { GoogleGenAI, Type } from "@google/genai";
import { UserAnswers, AssessmentResult, Question } from "../types";

// Modèle pour la génération d'images : gemini-2.5-flash-image
export const generateHeroImage = async (): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: "A clean, high-end professional 3D illustration of a futuristic radar chart showing career skills. Deep blue, indigo and cyan neon colors. Sleek corporate design, professional lighting, isolated on a dark background. High resolution 4k.",
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Erreur génération image IA:", error);
    return null;
  }
};

// Modèle pour l'analyse : gemini-3-flash-preview
export const generateAssessmentReport = async (
  answers: UserAnswers,
  questions: Question[]
): Promise<AssessmentResult> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const formattedData = questions.map(q => {
      const answerValue = answers[q.id];
      let answerText = '';
      
      if (q.type === 'multi' || Array.isArray(answerValue)) {
        answerText = (answerValue || []).map((v: any) => q.options?.find(o => o.value === v)?.label || v).join(', ');
      } else if (q.type === 'text') {
        answerText = answerValue;
      } else {
        answerText = q.options?.find(o => o.value === answerValue)?.label || String(answerValue || 'N/A');
      }

      return {
        categorie: q.partTitle,
        question: q.text,
        reponse: answerText
      };
    });

    const prompt = `Tu es un expert RH et coach en orientation professionnelle. Analyse ces réponses de bilan de compétences : ${JSON.stringify(formattedData)}.

RÈGLES IMPORTANTES :
1. Le radar (skillsRadarData) doit avoir 5 axes : Leadership, Technique, Créativité, Adaptabilité, Communication. Score entre 1 et 5.
2. Les suggestions de carrière (careerSuggestions) DOIVENT être COHÉRENTES avec les scores du radar :
   - Si Leadership < 3 : NE PAS proposer de postes de management ou direction d'équipe
   - Si Technique < 3 : NE PAS proposer de postes techniques spécialisés
   - Privilégier les métiers qui correspondent aux scores les PLUS ÉLEVÉS
3. Chaque suggestion doit expliquer POURQUOI elle correspond au profil en citant les compétences fortes
4. Propose 3 métiers vraiment adaptés au profil, pas des métiers génériques

Génère un rapport encourageant mais RÉALISTE et COHÉRENT en JSON strict.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "Tu es une IA spécialisée dans le recrutement et l'orientation professionnelle. Tu ne réponds QUE par du JSON valide.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
            areasForImprovement: { type: Type.ARRAY, items: { type: Type.STRING } },
            valuesAlignment: { type: Type.STRING },
            careerSuggestions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  relevance: { type: Type.STRING },
                  salary_range: { type: Type.STRING }
                },
                required: ["title", "description", "relevance"]
              }
            },
            skillsRadarData: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  subject: { type: Type.STRING },
                  A: { type: Type.NUMBER },
                  fullMark: { type: Type.NUMBER }
                },
                required: ["subject", "A", "fullMark"]
              }
            }
          },
          required: ["summary", "strengths", "areasForImprovement", "valuesAlignment", "careerSuggestions", "skillsRadarData"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Réponse vide");
    return JSON.parse(text);
  } catch (error) {
    console.error("Erreur Gemini:", error);
    throw error;
  }
};
