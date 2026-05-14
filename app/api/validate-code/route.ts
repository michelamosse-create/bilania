import { NextRequest, NextResponse } from 'next/server';
import validCodes from '@/lib/promo-codes.json';

const USED_CODES = new Set<string>();

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    if (!code || typeof code !== 'string') {
      return NextResponse.json({ valid: false, error: 'Code manquant' }, { status: 400 });
    }

    const normalized = code.trim().toUpperCase();

    if (USED_CODES.has(normalized)) {
      return NextResponse.json({ valid: false, error: 'Ce code a déjà été utilisé.' });
    }

    if (validCodes.includes(normalized)) {
      USED_CODES.add(normalized);
      return NextResponse.json({ valid: true, message: 'Code valide. Accès premium débloqué.' });
    }

    return NextResponse.json({ valid: false, error: 'Code invalide.' });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
