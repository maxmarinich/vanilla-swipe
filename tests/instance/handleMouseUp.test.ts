import VS from '../../src';
import * as Helpers from '../helpers';

describe('VanillaSwipe: handleMouseUp', function() {
  it('should have expected behavior', function() {
    const onSwiped = jest.fn();

    const mouseDownEventObject: any = Helpers.createMouseEventObject(1, 1);
    const mouseMoveEventObject: any = Helpers.createMouseEventObject(1000, 1000);
    const VanillaSwipe = new VS({ element: null, onSwiped });

    VanillaSwipe.handleMouseDown(mouseDownEventObject);
    VanillaSwipe.handleSwipeMove(mouseMoveEventObject);
    VanillaSwipe.handleMouseUp(mouseMoveEventObject);

    expect(VanillaSwipe.state.isSwiping).toBe(false);
    expect(onSwiped).toHaveBeenCalledTimes(1);
  });
});
