import VS from '../../src';
import * as Helpers from '../helpers';

describe('VanillaSwipe: handleSwipeMove', function() {
  it('should return expected data if no x', function() {
    const VanillaSwipe = new VS({ element: null });
    const touchMoveEventObject = Helpers.createTouchMoveEventObject(0, 1);

    VanillaSwipe.handleSwipeMove(touchMoveEventObject);

    expect(VanillaSwipe.state.start).toBe(0);
  });

  it('should return expected data if no y', function() {
    const VanillaSwipe = new VS({ element: null });
    const touchMoveEventObject = Helpers.createTouchMoveEventObject(1, 0);

    VanillaSwipe.handleSwipeMove(touchMoveEventObject);

    expect(VanillaSwipe.state.start).toBe(0);
  });

  it('should return expected data if much touches', function() {
    const VanillaSwipe = new VS({ element: null });
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1, 1, 2);

    VanillaSwipe.handleSwipeStart(touchMoveEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);

    expect(VanillaSwipe.state.start).toBe(0);
  });

  it('should not prevent event if not cancelable', function() {
    const preventDefault = jest.fn();

    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1, 1, 0, false, preventDefault);
    const VanillaSwipe = new VS({ element: null, preventDefaultTouchmoveEvent: true });

    VanillaSwipe.handleSwipeStart(touchMoveEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);

    expect(preventDefault).not.toHaveBeenCalled();
  });

  it('should not prevent event if not preventDefaultTouchmoveEvent', function() {
    const preventDefault = jest.fn();

    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1, 1, 0, true, preventDefault);
    const VanillaSwipe = new VS({ element: null });

    VanillaSwipe.handleSwipeStart(touchMoveEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);

    expect(preventDefault).not.toHaveBeenCalled();
  });

  it('should prevent event if cancelable', function() {
    const preventDefault = jest.fn();

    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1, 1, 0, true, preventDefault);
    const VanillaSwipe = new VS({ element: null, preventDefaultTouchmoveEvent: true });

    VanillaSwipe.handleSwipeStart(touchMoveEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);

    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should have expected behavior if x less delta', function() {
    const preventDefault = jest.fn();

    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1, 1, 0, true, preventDefault);
    const VanillaSwipe = new VS({ element: null });

    VanillaSwipe.handleSwipeStart(touchMoveEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);

    expect(VanillaSwipe.state.isSwiping).toBe(false);
  });

  it('should have expected behavior if x more than delta', function() {
    const preventDefault = jest.fn();

    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(11, 1, 0, true, preventDefault);
    const VanillaSwipe = new VS({ element: null });

    VanillaSwipe.handleSwipeStart(touchMoveEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);

    expect(VanillaSwipe.state.isSwiping).toBe(false);
  });

  it('should have expected behavior if x more than delta && y less', function() {
    const preventDefault = jest.fn();

    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(11, 1, 0, true, preventDefault);
    const VanillaSwipe = new VS({ element: null });

    VanillaSwipe.handleSwipeStart(touchMoveEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);

    expect(VanillaSwipe.state.isSwiping).toBe(false);
  });

  it('should have expected behavior if x && y more than delta', function() {
    const touchStartEventObject: any = Helpers.createTouchMoveEventObject(1, 1);
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1000, 1000);
    const VanillaSwipe = new VS({ element: null });

    VanillaSwipe.handleSwipeStart(touchStartEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);

    expect(VanillaSwipe.state.isSwiping).toBe(true);
  });

  it('should have expected behavior if no onSwiping function', function() {
    const onSwiping = jest.fn();

    const touchStartEventObject: any = Helpers.createTouchMoveEventObject(1, 1);
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1000, 1000);
    const VanillaSwipe = new VS({ element: null });

    VanillaSwipe.handleSwipeStart(touchStartEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);

    expect(VanillaSwipe.state.isSwiping).toBe(true);
    expect(onSwiping).toHaveBeenCalledTimes(0);
  });

  it('should have expected behavior if onSwiping function', function() {
    const onSwiping = jest.fn();

    const touchStartEventObject: any = Helpers.createTouchMoveEventObject(1, 1);
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1000, 1000);
    const VanillaSwipe = new VS({ element: null, onSwiping });

    VanillaSwipe.handleSwipeStart(touchStartEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);

    expect(VanillaSwipe.state.isSwiping).toBe(true);
    expect(onSwiping).toHaveBeenCalledTimes(1);
  });
});
