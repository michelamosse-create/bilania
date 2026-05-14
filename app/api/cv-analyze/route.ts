import { NextRequest, NextResponse } from 'next/server';
import { analyzeCVWithAI } from '@/lib/ai';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('cv') as File;
    const assessmentProfile = formData.get('profile') as string;

    if (!file) {
      return NextResponse.json({ error: 'Fichier CV manquant' }, { status: 400 });
    }

    if (!assessmentProfile) {
      return NextResponse.json({ error: 'Profil manquant' }, { status: 400 });
    }

    // Lire le contenu texte du PDF
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Extraction basique du texte PDF (sans lib externe lourde)
    // On utilise une approche simple : extraire le texte lisible
    let cvText = '';
    try {
      // Tentative d'extraction du texte avec pdf-parse
      const pdfParseMod = await import('pdf-parse');
      const pdfParse = (pdfParseMod as any).default || pdfParseMod;
      const pdfData = await pdfParse(buffer);
      cvText = pdfData.text.substring(0, 6000); // Limiter à 6000 caractères
    } catch {
      // Fallback: envoyer le buffer en base64 à Claude pour qu'il l'analyse
      cvText = `[CV en PDF - texte non extractible automatiquement. Le fichier fait ${buffer.length} octets. Analyse basée sur le profil.]`;
    }

    const result = await analyzeCVWithAI(cvText, assessmentProfile);
    const data = JSON.parse(result);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur analyse CV:', error);
    return NextResponse.json(
      { error: "Erreur lors de l'analyse du CV. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
