import * as Utils from '.';
import { Axis, Direction } from '../types';

export function resolveDirection(trace: number[], axis: Axis = Axis.X, directionDelta = 0): Direction {
  if (directionDelta) {
    const directions = Utils.calculateTraceDirections(trace);
    const direction = Utils.calculateDirectionDelta(directions, directionDelta);

    return Utils.resolveAxisDirection(axis, direction);
  }

  const direction = Utils.calculateDirection(trace);
  return Utils.resolveAxisDirection(axis, direction);
}
