import { TraceDirectionKey } from '../types';

export function calculateDirection(trace: number[]): TraceDirectionKey {
  let direction;
  let negative = TraceDirectionKey.NEGATIVE;
  let positive = TraceDirectionKey.POSITIVE;
  const current = trace[trace.length - 1];
  const previous = trace[trace.length - 2] || 0;

  if (trace.every((i) => i === 0)) {
    return TraceDirectionKey.NONE;
  }

  direction = current > previous ? positive : negative;

  if (current === 0) {
    direction = previous < 0 ? positive : negative;
  }

  return direction;
}
