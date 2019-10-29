export function calculatePosition(prevState: any, nextState: any) {
  const deltaX = prevState.x - nextState.x;
  const deltaY = prevState.y - nextState.y;

  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);
  const duration = Date.now() - prevState.start;

  return { deltaX, deltaY, absX, absY, duration };
}
