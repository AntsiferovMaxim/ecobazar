export function formatPrice(payload: number): string {
  return "$" + payload.toFixed(2);
}
