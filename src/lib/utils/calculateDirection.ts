import { Direction } from '../types';

export function calculateDirection(trace: number[], axis: 'x' | 'y'): Direction {
  let direction;
  let negative = Direction.LEFT;
  let positive = Direction.RIGHT;
  const current = trace[trace.length - 1];
  const previous = trace[trace.length - 2] || 0;

  if (trace.every((i) => i === 0)) {
    return Direction.NONE;
  }

  if (axis === 'y') {
    negative = Direction.BOTTOM;
    positive = Direction.TOP;
  }

  direction = current > previous ? positive : negative;

  if (current === 0) {
    direction = previous < 0 ? positive : negative;
  }

  return direction;
}
