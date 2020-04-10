import { checkIsPassiveSupported, noop } from '../../src/lib/utils';

describe('checkIsPassiveSupported', () => {
  it('should return expected data if no params', () => {
    expect(checkIsPassiveSupported()).toEqual(false);
  });

  it('should return expected data if PassiveEvent not support', () => {
    expect(checkIsPassiveSupported(false)).toEqual(false);
  });

  it('should return expected data if PassiveEvent support', () => {
    expect(checkIsPassiveSupported(true)).toEqual(true);
  });
});

describe('noop', () => {
  it('should return expected data', () => {
    expect(noop()).toBe(undefined);
  });
});
