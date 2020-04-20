export function calculateDirection(trace: number[], axis: 'x' | 'y') {
  let direction;
  let negative = 'LEFT';
  let positive = 'RIGHT';
  const current = trace[trace.length - 1];
  const previous = trace[trace.length - 2];

  if (axis === 'y') {
    negative = 'BOTTOM';
    positive = 'TOP';
  }

  direction = current > previous ? positive : negative;

  if (current === 0) {
    direction = previous < 0 ? positive : negative;
  }

  return direction;
}

