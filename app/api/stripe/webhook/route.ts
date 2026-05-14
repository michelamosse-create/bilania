import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createServiceClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature')!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error('Erreur signature webhook:', error);
    return NextResponse.json({ error: 'Signature invalide' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_email || session.metadata?.email;

    if (email) {
      const supabase = await createServiceClient();

      // Créer ou récupérer l'utilisateur
      const { data: existingUser } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email)
        .single();

      if (!existingUser) {
        // Créer le profil (l'utilisateur créera son compte plus tard)
        await supabase.from('profiles').insert({
          email,
          stripe_customer_id: session.customer as string,
          tier: 'premium',
          status: 'active',
        });
      } else {
        await supabase
          .from('profiles')
          .update({ tier: 'premium', status: 'active' })
          .eq('id', existingUser.id);
      }
    }
  }

  return NextResponse.json({ received: true });
}
