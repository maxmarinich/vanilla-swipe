import { isVerticalTouchMoveDetected } from '../../src/utils';

describe('isVerticalTouchMoveDetected', () => {
  it('should return false if horizontal is greater than 32', () => {
    const horizontal = 33, vertical = 34;
    expect(isVerticalTouchMoveDetected(horizontal, vertical)).toBeFalsy();
  });

  it('should return true if vertical is less than horizontal', () => {
    const horizontal = 35, vertical = 34;
    expect(isVerticalTouchMoveDetected(horizontal, vertical)).toBeFalsy();
  });

  it('should return true if horizontal is less than 32 and vertical is greater than horizontal', () => {
    const horizontal = 31, vertical = 34;
    expect(isVerticalTouchMoveDetected(horizontal, vertical)).toBeTruthy();
  });
});
