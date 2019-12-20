export function calculateVelocity(x: number, y: number, time: number): number {
  const magnitude = Math.sqrt(x * x + y * y);

  return magnitude / (time || 1);
}
