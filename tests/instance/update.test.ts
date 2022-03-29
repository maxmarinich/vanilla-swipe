import VS from '../../src/lib';
import * as Helpers from '../helpers';

describe('VanillaSwipe: update', function() {
  it('should update data if element has been changed', function() {
    const VanillaSwipe = new VS({
      element: null,
      touchTrackingEnabled: false,
      mouseTrackingEnabled: true,
      delta: 100,
      rotationAngle: 10,
      preventDefaultTouchmoveEvent: true,
    });

    document.body.innerHTML = '<div id="root">Root</div>';
    const element = document.getElementById('root');

    VanillaSwipe.update({ element });

    expect(VanillaSwipe.props).toEqual({
      element,
      target: null,
      touchTrackingEnabled: false,
      mouseTrackingEnabled: true,
      delta: 100,
      directionDelta: 0,
      rotationAngle: 10,
      preventDefaultTouchmoveEvent: true,
      preventTrackingOnMouseleave: false,
    });
  });

  it('should update data if mouseTrackingEnabled has been changed', function() {
    document.body.innerHTML = '<div id="root">Root</div>';
    const element = document.getElementById('root');

    const VanillaSwipe = new VS({ element });

    expect(VanillaSwipe.props.mouseTrackingEnabled).toEqual(false);

    VanillaSwipe.update({ mouseTrackingEnabled: true });

    const options = Helpers.createMouseEventObject();
    const mousedown = Helpers.createEvent('mousedown', options);

    element && element.dispatchEvent(mousedown);

    expect(VanillaSwipe.props.mouseTrackingEnabled).toEqual(true);
    expect(VanillaSwipe.state.start > 0).toBe(true);
  });

  it('should update data if mouseTrackingEnabled has been changed by negative', function() {
    document.body.innerHTML = '<div id="root">Root</div>';
    const element = document.getElementById('root');

    const VanillaSwipe = new VS({ element, mouseTrackingEnabled: true });

    VanillaSwipe.update({ mouseTrackingEnabled: false });

    const options = Helpers.createMouseEventObject();
    const mousedown = Helpers.createEvent('mousedown', options);

    element && element.dispatchEvent(mousedown);

    expect(VanillaSwipe.props.mouseTrackingEnabled).toEqual(false);
    expect(VanillaSwipe.state.start === 0).toBe(true);
  });

  it('should update data if touchTrackingEnabled has been changed', function() {
    document.body.innerHTML = '<div id="root">Root</div>';
    const element = document.getElementById('root');

    const VanillaSwipe = new VS({ element, touchTrackingEnabled: false });

    expect(VanillaSwipe.props.touchTrackingEnabled).toEqual(false);

    VanillaSwipe.update({ touchTrackingEnabled: true });

    const options = Helpers.createTouchStartEventObject();
    const touchstart = Helpers.createEvent('touchstart', options);

    element && element.dispatchEvent(touchstart);

    expect(VanillaSwipe.props.touchTrackingEnabled).toEqual(true);
    expect(VanillaSwipe.state.start > 0).toBe(true);
  });

  it('should update data if touchTrackingEnabled has been changed by negative', function() {
    document.body.innerHTML = '<div id="root">Root</div>';
    const element = document.getElementById('root');

    const VanillaSwipe = new VS({ element, touchTrackingEnabled: true });
    VanillaSwipe.update({ touchTrackingEnabled: false });

    const options = Helpers.createTouchStartEventObject();
    const touchstart = Helpers.createEvent('touchstart', options);

    element && element.dispatchEvent(touchstart);

    expect(VanillaSwipe.props.touchTrackingEnabled).toEqual(false);
    expect(VanillaSwipe.state.start === 0).toBe(true);
  });

  it('should update data if target updated', function() {
    document.body.innerHTML = `
      <div>
        <div id="root">Root</div>
        <div id="target">Target</div>
      </div>
    `;
    const onSwiping = jest.fn();
    const element = document.getElementById('root');
    const target = document.getElementById('target');

    const VanillaSwipe = new VS({ element, mouseTrackingEnabled: true, onSwiping });

    const mouseDownEventObject: any = Helpers.createMouseEventObject(1, 1);
    const mouseMoveEventObject: any = Helpers.createMouseEventObject(1000, 1000);

    VanillaSwipe.handleMouseDown(mouseDownEventObject);
    VanillaSwipe.handleSwipeMove(mouseMoveEventObject);

    expect(VanillaSwipe.state.isSwiping).toBe(true);
    expect(onSwiping).toHaveBeenCalledTimes(1);

    VanillaSwipe.update({ element, target, mouseTrackingEnabled: true, onSwiping });

    VanillaSwipe.handleMouseDown(mouseDownEventObject);
    VanillaSwipe.handleSwipeMove(mouseMoveEventObject);

    expect(VanillaSwipe.state.isSwiping).toBe(false);
    expect(onSwiping).toHaveBeenCalledTimes(1);
  });
});
