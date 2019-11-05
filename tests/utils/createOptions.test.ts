import { createOptions } from '../../src/utils';

describe('createOptions', () => {
  const value = { isPassiveSupported: true, passive: true };

  it('should return expected data if props are passed', () => {
    const options: any = createOptions({ isPassiveSupported: false });

    expect(options.passive).toBe(true);
    expect(options.isPassiveSupported).toBe(true);
  });

  it('should return expected data if props are not passed', () => {
    const options: any = createOptions();

    expect(options.passive).toBe(true);
    expect(options.isPassiveSupported).toBe(true);
  });
});
