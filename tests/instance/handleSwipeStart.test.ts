import VS from '../../src/lib';
import * as Helpers from '../helpers';

describe('VanillaSwipe: handleSwipeStart', function() {
  it('should return expected data if many touches', function() {
    const VanillaSwipe = new VS({ element: null });
    const touchMoveEventObject = Helpers.createTouchMoveEventObject(0, 1, 2);

    VanillaSwipe.handleSwipeStart(touchMoveEventObject);

    expect(VanillaSwipe.state.start).toBe(0);
  });

  it('should return expected data if no touches && no rotationAngle', function() {
    const VanillaSwipe = new VS({ element: null });
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(0, 1);

    VanillaSwipe.handleSwipeStart(touchMoveEventObject);

    expect(VanillaSwipe.state.start > 0).toBe(true);
    expect(VanillaSwipe.state.isSwiping).toBe(false);
    expect(VanillaSwipe.state.x).toBe(0);
    expect(VanillaSwipe.state.y).toBe(1);
  });

  it('should return expected data if no touches && rotationAngle', function() {
    const VanillaSwipe = new VS({ element: null, rotationAngle: 10 });
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(0, 1);

    VanillaSwipe.handleSwipeStart(touchMoveEventObject);

    expect(VanillaSwipe.state.start > 0).toBe(true);
    expect(VanillaSwipe.state.x > 0).toBe(true);
    expect(VanillaSwipe.state.y > 0).toBe(true);
    expect(VanillaSwipe.state.isSwiping).toBe(false);
  });
});
