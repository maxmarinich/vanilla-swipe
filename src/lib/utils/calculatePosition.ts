import { calculateDuration } from "./calculateDuration";
import { calculateVelocity } from "./calculateVelocity";
import { EventData, State } from '../types';
import * as Utils from "./index";

export function calculatePosition(state: State, nextPos: nextPosition): EventData {
  const { start, traceX, traceY  } = state;
  const deltaX = nextPos.x - state.x;
  const deltaY = state.y - nextPos.y;

  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);

  const lastX = traceX[traceX.length - 1];
  const lastY = traceY[traceY.length - 1];

  if (lastX !== deltaX) state.traceX.push(deltaX);
  if (lastY !== deltaY) state.traceY.push(deltaY);

  const directionX = Utils.calculateDirection(state.traceX, 'x' )
  const directionY = Utils.calculateDirection(state.traceY, 'y')
  const duration = calculateDuration(start, Date.now());
  const velocity = calculateVelocity(absX, absY, duration);

  return {
    absX,
    absY,
    deltaX,
    deltaY,
    duration,
    direction: [directionX, directionY],
    velocity
  };
}

type nextPosition = {
  x: number;
  y: number;
};
