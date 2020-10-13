import { Axis, Direction, TraceDirectionKey } from '../types';

export const getDirectionKey = (object = {}) => {
  const key = Object.keys(object).toString();

  switch (key) {
    case TraceDirectionKey.POSITIVE:
      return TraceDirectionKey.POSITIVE;
    case TraceDirectionKey.NEGATIVE:
      return TraceDirectionKey.NEGATIVE;
    default:
      return TraceDirectionKey.NONE;
  }
};

export const getDirectionValue = (values: number[] = []): number => {
  return values[values.length - 1] || 0;
};

export const getDifference = (x = 0, y = 0) => {
  return Math.abs(x - y);
};

export const resolveAxisDirection = (axis: Axis, key: TraceDirectionKey): Direction => {
  let negative = Direction.LEFT;
  let positive = Direction.RIGHT;
  let direction = Direction.NONE;

  if (axis === Axis.Y) {
    negative = Direction.BOTTOM;
    positive = Direction.TOP;
  }

  if (key === TraceDirectionKey.NEGATIVE) {
    direction = negative;
  }

  if (key === TraceDirectionKey.POSITIVE) {
    direction = positive;
  }

  return direction;
};
