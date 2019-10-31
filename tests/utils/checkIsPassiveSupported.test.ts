import * as Helpers from '../helpers';
import { checkIsPassiveSupported } from '../../src/utils';

describe('checkIsPassiveSupported', () => {
  it('should return expected data if PassiveEvent not support', () => {
    expect(checkIsPassiveSupported(false)).toEqual(false);
  });

  it('should return expected data if PassiveEvent support', () => {
    expect(checkIsPassiveSupported(true)).toEqual(true);
  });
});
