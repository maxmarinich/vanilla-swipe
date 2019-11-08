import VS from '../../src';
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
      touchTrackingEnabled: false,
      mouseTrackingEnabled: true,
      delta: 100,
      rotationAngle: 10,
      preventDefaultTouchmoveEvent: true,
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
});
