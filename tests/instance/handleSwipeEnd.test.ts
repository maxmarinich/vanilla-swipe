import VS from '../../src/lib';
import * as Utils from '../../src/lib/utils';
import * as Helpers from '../helpers';

describe('VanillaSwipe: handleSwipeEnd', function() {
  it('should have expected behavior if onSwiped function', function() {
    const onSwiped = jest.fn();

    const touchStartEventObject: any = Helpers.createTouchMoveEventObject(1, 1);
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1000, 1000);
    const VanillaSwipe = new VS({ element: null, onSwiped });

    VanillaSwipe.handleSwipeStart(touchStartEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);
    VanillaSwipe.handleSwipeEnd(touchMoveEventObject);

    expect(onSwiped).toHaveBeenCalledTimes(1);
    expect(VanillaSwipe.state).toEqual(Utils.getInitialState());
  });

  it('should have expected behavior if not onSwiped function', function() {
    const onSwiped = jest.fn();

    const touchStartEventObject: any = Helpers.createTouchMoveEventObject(1, 1);
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1000, 1000);
    const VanillaSwipe = new VS({ element: null });

    VanillaSwipe.handleSwipeStart(touchStartEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);
    VanillaSwipe.handleSwipeEnd(touchMoveEventObject);

    expect(onSwiped).toHaveBeenCalledTimes(0);
    expect(VanillaSwipe.state).toEqual(Utils.getInitialState());
  });

  it('should have expected behavior if onTap function', function() {
    const onSwiped = jest.fn();
    const onTap = jest.fn();

    const touchStartEventObject: any = Helpers.createTouchMoveEventObject(1, 1);
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1000, 1000);
    const VanillaSwipe = new VS({ element: null, onTap });

    VanillaSwipe.handleSwipeStart(touchStartEventObject);
    VanillaSwipe.handleSwipeEnd(touchMoveEventObject);

    expect(onSwiped).toHaveBeenCalledTimes(0);
    expect(onTap).toHaveBeenCalledTimes(1);
    expect(VanillaSwipe.state).toEqual(Utils.getInitialState());
  });

  it('should have expected behavior if no onTap function', function() {
    const onSwiped = jest.fn();
    const onTap = jest.fn();

    const touchStartEventObject: any = Helpers.createTouchMoveEventObject(1, 1);
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1000, 1000);
    const VanillaSwipe = new VS({ element: null });

    VanillaSwipe.handleSwipeStart(touchStartEventObject);
    VanillaSwipe.handleSwipeEnd(touchMoveEventObject);

    expect(onSwiped).toHaveBeenCalledTimes(0);
    expect(onTap).toHaveBeenCalledTimes(0);
    expect(VanillaSwipe.state).toEqual(Utils.getInitialState());
  });

  it('should have expected behavior if onSwiped function & directionDelta greater', function() {
    const onSwiped = jest.fn();

    const touchStartEventObject: any = Helpers.createTouchMoveEventObject(1, 1);
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(10, 10);
    const VanillaSwipe = new VS({ element: null, onSwiped, directionDelta: 100 });

    VanillaSwipe.handleSwipeStart(touchStartEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);
    VanillaSwipe.handleSwipeEnd(touchMoveEventObject);

    expect(onSwiped).toHaveBeenCalledTimes(0);
    expect(VanillaSwipe.state).toEqual(Utils.getInitialState());
  });

  it('should have expected behavior if onSwiped function & directionDelta passed', function() {
    const onSwiped = jest.fn();

    const touchStartEventObject: any = Helpers.createTouchMoveEventObject(1, 1);
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(11, 11);
    const VanillaSwipe = new VS({ element: null, onSwiped, directionDelta: 1 });

    VanillaSwipe.handleSwipeStart(touchStartEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);
    VanillaSwipe.handleSwipeEnd(touchMoveEventObject);

    expect(onSwiped).toHaveBeenCalledTimes(1);
    expect(VanillaSwipe.state).toEqual(Utils.getInitialState());
  });

  it('should have expected behavior if onSwiped function & directionDelta 0', function() {
    const onSwiped = jest.fn();

    const touchStartEventObject: any = Helpers.createTouchMoveEventObject(1, 1);
    const touchMoveEventObject: any = Helpers.createTouchMoveEventObject(1000, 1000);
    const VanillaSwipe = new VS({ element: null, onSwiped, directionDelta: 0 });

    VanillaSwipe.handleSwipeStart(touchStartEventObject);
    VanillaSwipe.handleSwipeMove(touchMoveEventObject);
    VanillaSwipe.handleSwipeEnd(touchMoveEventObject);

    expect(onSwiped).toHaveBeenCalledTimes(1);
    expect(VanillaSwipe.state).toEqual(Utils.getInitialState());
  });

});
