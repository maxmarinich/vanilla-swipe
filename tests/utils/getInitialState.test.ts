import * as Helpers from '../helpers';
import { getInitialState } from '../../src/utils';

describe('getInitialState', () => {
  it('should return expected data', () => {
    expect(getInitialState()).toEqual({ x: 0, y: 0, start: 0, isSwiping: false });
  });
});
