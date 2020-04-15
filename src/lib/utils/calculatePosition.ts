import { calculateDuration } from "./calculateDuration";
import { calculateVelocity } from "./calculateVelocity";
import { EventData } from '../types';

export function calculatePosition(
  prevPos: prevPosition,
  nextPos: nextPosition
): EventData {
  const deltaX = nextPos.x - prevPos.x;
  const deltaY = prevPos.y - nextPos.y;

  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);
  const duration = calculateDuration(prevPos.start, Date.now());
  const velocity = calculateVelocity(absX, absY, duration);

  return { deltaX, deltaY, absX, absY, duration, velocity };
}

type prevPosition = {
  x: number;
  y: number;
  start: number;
};

type nextPosition = {
  x: number;
  y: number;
};
