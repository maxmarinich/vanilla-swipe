import { getOptions } from '../../src/utils';

describe('getOptions', () => {
  it('should return expected data if props are passed false', () => {
    const options: any = getOptions(false);

    expect(options.passive).toBe(undefined);
  });

  it('should return expected data if props are passed true', () => {
    const options: any = getOptions(true);

    expect(options.passive).toBe(false);
  });

  it('should return expected data if props are not passed', () => {
    const options: any = getOptions();

    expect(options.passive).toBe(undefined);
  });
});
