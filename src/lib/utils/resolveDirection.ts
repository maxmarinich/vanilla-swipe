import { calculateDirection } from './calculateDirection';
import { calculateTraceDirections } from './calculateTraceDirections';
import { calculateDirectionDelta } from './calculateDirectionDelta';
import { resolveAxisDirection } from './common';
import { Axis, Direction } from '../types';

export function resolveDirection(trace: number[], axis: Axis = Axis.X, directionDelta = 0): Direction {
  if (directionDelta) {
    const directions = calculateTraceDirections(trace);
    const direction = calculateDirectionDelta(directions, directionDelta);

    return resolveAxisDirection(axis, direction);
  }

  const direction = calculateDirection(trace);
  return resolveAxisDirection(axis, direction);
}
