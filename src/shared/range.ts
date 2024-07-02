export function range(from: number, to: number) {
  return [...new Array(to - from + 1)].map((_, index) => index + from);
}
