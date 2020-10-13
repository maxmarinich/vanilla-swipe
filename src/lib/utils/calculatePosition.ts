import * as Utils from '.';
import { Axis, EventData, State } from '../types';

export function calculatePosition(state: State, options: Options): EventData {
  const { start, x, y, traceX, traceY } = state;
  const { rotatePosition, directionDelta } = options;
  const deltaX = rotatePosition.x - x;
  const deltaY = y - rotatePosition.y;

  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);

  Utils.updateTrace(traceX, deltaX);
  Utils.updateTrace(traceY, deltaY);

  const directionX = Utils.resolveDirection(traceX, Axis.X, directionDelta);
  const directionY = Utils.resolveDirection(traceY, Axis.Y, directionDelta);
  const duration = Utils.calculateDuration(start, Date.now());
  const velocity = Utils.calculateVelocity(absX, absY, duration);

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
