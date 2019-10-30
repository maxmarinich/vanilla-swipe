export function calculatePosition(prevPos: prevPosition, nextPos: nextPosition): Value {
  const deltaX = prevPos.x - nextPos.x;
  const deltaY = prevPos.y - nextPos.y;

  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);
  const duration = Date.now() - prevPos.start;

  return { deltaX, deltaY, absX, absY, duration };
}

type Value = {
  deltaX: number;
  deltaY: number;
  absX: number;
  absY: number;
  duration: number;
};

type prevPosition = {
  x: number;
  y: number;
  start: number;
};

type nextPosition = {
  x: number;
  y: number;
};
