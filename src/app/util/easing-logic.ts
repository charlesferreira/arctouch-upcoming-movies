export function easeInOutSine(t: number, b: number, c: number, d: number) {
  return b + c * Math.sin((Math.PI * t) / (2 * d));
}
