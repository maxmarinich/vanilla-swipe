import { calculateDuration } from "./calculateDuration";
import { calculateVelocity } from "./calculateVelocity";
import { updateTrace } from "./updateTrace";
import { EventData, State } from '../types';
import * as Utils from "./index";

export function calculatePosition(state: State, nextPos: nextPosition): EventData {
  const deltaX = nextPos.x - state.x;
  const deltaY = state.y - nextPos.y;

  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);

  updateTrace(state.traceX, deltaX);
  updateTrace(state.traceY, deltaY);

  const directionX = Utils.calculateDirection(state.traceX, 'x' )
  const directionY = Utils.calculateDirection(state.traceY, 'y')
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
    velocity
  };
}

type nextPosition = {
  x: number;
  y: number;
};
