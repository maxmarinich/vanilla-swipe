import VS from '../../src/lib';
import * as Helpers from '../helpers';

const mouseDownEventObject: any = Helpers.createMouseEventObject(1, 1);
const mouseMoveEventObject: any = Helpers.createMouseEventObject(1000, 1000);
const mouseEventObject: any = Helpers.createMouseEventObject(0, 1);

describe('VanillaSwipe: handleMouseUp', function() {
  it('should have expected behavior', function() {
    const onSwiped = jest.fn();
    const VanillaSwipe = new VS({ element: null, onSwiped });

    VanillaSwipe.handleMouseDown(mouseDownEventObject);
    VanillaSwipe.handleSwipeMove(mouseMoveEventObject);
    VanillaSwipe.handleMouseUp(mouseMoveEventObject);

    expect(VanillaSwipe.state.isSwiping).toBe(false);
    expect(onSwiped).toHaveBeenCalledTimes(1);
  });

  it('should have expected behavior if target specified', function() {
    const target = document.createElement('div');
    const VanillaSwipe = new VS({ target });

    VanillaSwipe.handleMouseDown(mouseDownEventObject);
    VanillaSwipe.handleSwipeMove(mouseMoveEventObject);
    VanillaSwipe.handleMouseUp(mouseEventObject);

    expect(VanillaSwipe.state.start > 0).toBe(false);
  });

  it('should have expected behavior if target is e.target', function() {
    const target = document.createElement('div');
    const VanillaSwipe = new VS({ target });

    VanillaSwipe.handleMouseDown({ ...mouseDownEventObject, target });
    VanillaSwipe.handleSwipeMove(mouseMoveEventObject);
    VanillaSwipe.handleMouseUp({ ...mouseEventObject, target });

    expect(VanillaSwipe.state.isSwiping).toBe(false);
  });

  it('should have expected behavior if target && isSwiping', function() {
    const target = document.createElement('div');
    const VanillaSwipe = new VS({ target });

    VanillaSwipe.handleMouseDown({ ...mouseDownEventObject, target });
    VanillaSwipe.handleSwipeMove(mouseMoveEventObject);
    VanillaSwipe.handleMouseUp(mouseEventObject);

    expect(VanillaSwipe.state.isSwiping).toBe(false);
  });
});
