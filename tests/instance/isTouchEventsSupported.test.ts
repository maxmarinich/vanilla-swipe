import VS from '../../src/lib';

describe('VanillaSwipe: isTouchEventsSupported', () => {
  it('should return expected data if touch events supported', () => {
    const targetIsWindow = false;
    expect(VS.isTouchEventsSupported()).toEqual(targetIsWindow);
  });
});
