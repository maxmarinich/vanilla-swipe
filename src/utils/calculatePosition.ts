import { calculateDuration } from "./calculateDuration";
import { calculateVelocity } from "./calculateVelocity";

export function calculatePosition(
  prevPos: prevPosition,
  nextPos: nextPosition
): Value {
  const deltaX = prevPos.x - nextPos.x;
  const deltaY = prevPos.y - nextPos.y;

  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);
  const duration = calculateDuration(prevPos.start, Date.now());
  const velocity = calculateVelocity(absX, absY, duration);

  return { deltaX, deltaY, absX, absY, duration, velocity };
}

type Value = {
  deltaX: number;
  deltaY: number;
  absX: number;
  absY: number;
  duration: number;
  velocity: number;
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
