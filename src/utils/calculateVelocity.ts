export function calculateVelocity(x: number, y: number, time: number): number {
  const magnitude = Math.sqrt(x * x + y * y);
  const velosity = magnitude / (time || 1);

  return Number(`${velosity}`.slice(0, 5));
}
