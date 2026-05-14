import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const key = process.env.STRIPE_SECRET_KEY;

  if (!secret || !key) {
    return NextResponse.json({ received: true, note: 'Stripe not configured' });
  }

  try {
    const { default: Stripe } = await import('stripe');
    const stripe = new Stripe(key, { apiVersion: '2026-04-22.dahlia' as any });

    const body = await req.text();
    const signature = req.headers.get('stripe-signature')!;

    const event = stripe.webhooks.constructEvent(body, signature, secret);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const email = session.customer_email || (session as any).metadata?.email;
      console.log(`Paiement réussi pour: ${email}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
