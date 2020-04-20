import { State } from '../types';

export const getInitialState = (options = {}) => {
  return {
    x: 0,
    y: 0,
    start: 0,
    isSwiping: false,
    traceX: [],
    traceY: [],
    ...options,
  };
};
