import { checkIsTouchEventsSupported } from '../../src/lib/utils';

describe('checkIsTouchEventsSupported', () => {
  it('should return expected data if touch events supported', () => {
    const targetIsWindow = false;
    expect(checkIsTouchEventsSupported()).toEqual(targetIsWindow);
  });
});
