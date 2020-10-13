import { calculateDuration } from './calculateDuration';
import { calculateVelocity } from './calculateVelocity';
import { updateTrace } from './updateTrace';
import * as Utils from './index';
import type { EventData, State } from '../types';

export function calculatePosition(state: State, nextPos: nextPosition): EventData {
  const deltaX = nextPos.x - state.x;
  const deltaY = state.y - nextPos.y;

  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);

  updateTrace(state.traceX, deltaX);
  updateTrace(state.traceY, deltaY);

  console.debug(JSON.stringify(state.traceX));

  const directionX = Utils.calculateDirection(state.traceX, 'x');
  const directionY = Utils.calculateDirection(state.traceY, 'y');
  const duration = calculateDuration(state.start, Date.now());
  const velocity = calculateVelocity(absX, absY, duration);

  return {
    absX,
    absY,
    deltaX,
    deltaY,
    directionX,
    directionY,
    duration,
    positionX: nextPos.x,
    positionY: nextPos.y,
    velocity,
  };
}

type nextPosition = {
  x: number;
  y: number;
};
