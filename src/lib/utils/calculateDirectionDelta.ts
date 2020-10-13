import { TraceDirection } from '../types';
import { getDirectionKey,  getDirectionValue, getDifference} from '.';

export function calculateDirectionDelta(traceDirections: TraceDirection[], delta = 0) {
  const { length } = traceDirections;

  let i = length - 1;
  let direction = 'NONE';

  for (; i >= 0; i--) {
    const current = traceDirections[i];
    const currentKey = getDirectionKey(current);
    const currentValue = getDirectionValue(current[currentKey]);

    const prev = traceDirections[i - 1] || {};
    const prevKey = getDirectionKey(prev);
    const prevValue = getDirectionValue(prev[prevKey]);
    const difference = getDifference(currentValue, prevValue);

    if (difference >= delta) {
      direction = currentKey;
      break;
    } else {
      direction = prevKey;
    }
  }

  return direction;
}
