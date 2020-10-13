import { TraceDirection  } from '../types';

export function calculateTraceDirections(trace: number[] = []): TraceDirection[] {
  const ticks: TraceDirection[] = [];
  const positive = 'POSITIVE';
  const negative = 'NEGATIVE';

  let i = 0;
  let tick = [];
  let direction = 'NONE';

  for (; i < trace.length; i++) {
    let current = trace[i];
    let prev = trace[i - 1];

    if (tick.length) {
      const currentDirection = current > prev ? positive : negative;

      if (direction === 'NONE') {
        direction = currentDirection;
      }

      if (currentDirection === direction) {
        tick.push(current);
      } else {
        ticks.push({ [direction]: tick.slice() });
        tick = [];

        tick.push(current);
        direction = currentDirection;
      }
    } else {
      if (current !== 0) {
        direction = current > 0 ? positive : negative;
      }
      tick.push(current);
    }
  }

  if (tick.length) {
    ticks.push({ [direction]: tick });
  }

  return ticks;
}
