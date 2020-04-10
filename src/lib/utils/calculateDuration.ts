export function calculateDuration(prevTime = 0, nextTime = 0): number {
  return prevTime ? nextTime - prevTime : 0;
}
