import { updateTrace } from './updateTrace';
import { resolveDirection } from './resolveDirection';
import { calculateDuration } from './calculateDuration';
import { calculateVelocity } from './calculateVelocity';
import { Axis, EventData, State } from '../types';

export function calculatePosition(state: State, options: Options): EventData {
  const { start, x, y, traceX, traceY } = state;
  const { rotatePosition, directionDelta } = options;
  const deltaX = rotatePosition.x - x;
  const deltaY = y - rotatePosition.y;

  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);

  updateTrace(traceX, deltaX);
  updateTrace(traceY, deltaY);

  const directionX = resolveDirection(traceX, Axis.X, directionDelta);
  const directionY = resolveDirection(traceY, Axis.Y, directionDelta);
  const duration = calculateDuration(start, Date.now());
  const velocity = calculateVelocity(absX, absY, duration);

  return {
    absX,
    absY,
    deltaX,
    deltaY,
    directionX,
    directionY,
    duration,
    positionX: rotatePosition.x,
    positionY: rotatePosition.y,
    velocity,
  };
}

type Options = {
  rotatePosition: nextPosition;
  directionDelta: number;
};

type nextPosition = {
  x: number;
  y: number;
};
