export function getStripePriceId(): string {
  return process.env.STRIPE_PRICE_ID || 'price_placeholder';
}
