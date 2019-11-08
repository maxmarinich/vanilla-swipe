import VS from '../../src';
import * as Helpers from '../helpers';

describe('VanillaSwipe: handleMouseMove', function() {
  it('should have expected behavior', function() {
    const onSwiping = jest.fn();

    const mouseDownEventObject: any = Helpers.createMouseEventObject(1, 1);
    const mouseMoveEventObject: any = Helpers.createMouseEventObject(1000, 1000);
    const VanillaSwipe = new VS({ element: null, onSwiping });

    VanillaSwipe.handleMouseDown(mouseDownEventObject);
    VanillaSwipe.handleSwipeMove(mouseMoveEventObject);

    expect(VanillaSwipe.state.isSwiping).toBe(true);
    expect(onSwiping).toHaveBeenCalledTimes(1);
  });
});
