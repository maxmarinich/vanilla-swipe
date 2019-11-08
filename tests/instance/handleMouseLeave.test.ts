import VS from '../../src';
import * as Helpers from '../helpers';

describe('VanillaSwipe: handleMouseLeave', function() {
  it('should have expected behavior if no element', function() {
    const onTap = jest.fn();
    const element: any = null;
    const VanillaSwipe = new VS({ element, onTap });

    VanillaSwipe.init();

    const mousedown = Helpers.createEvent('mousedown', Helpers.createMouseEventObject(1, 1));
    const mouseleave = Helpers.createEvent('mouseleave', Helpers.createMouseEventObject(100, 100));

    element && element.dispatchEvent(mousedown);
    element && element.dispatchEvent(mouseleave);

    expect(onTap).toHaveBeenCalledTimes(0);
  });

  it('should have expected behavior if not isSwiping', function() {
    document.body.innerHTML = '<div id="root">Root</div>';

    const onTap = jest.fn();
    const element = document.getElementById('root');
    const VanillaSwipe = new VS({ element, onTap });

    VanillaSwipe.init();

    const mousedown = Helpers.createEvent('mousedown', Helpers.createMouseEventObject(1, 1));
    const mouseleave = Helpers.createEvent('mouseleave', Helpers.createMouseEventObject(100, 100));

    element && element.dispatchEvent(mousedown);
    element && element.dispatchEvent(mouseleave);

    expect(onTap).toHaveBeenCalledTimes(0);
  });

  it('should have expected behavior if element && not isSwiping', function() {
    document.body.innerHTML = '<div id="root">Root</div>';

    const onTap = jest.fn();
    const element = document.getElementById('root');
    const VanillaSwipe = new VS({ element, onTap, mouseTrackingEnabled: true });

    VanillaSwipe.init();
    VanillaSwipe.handleMouseLeave();

    expect(onTap).toHaveBeenCalledTimes(0);
  });

  it('should have expected behavior if mouseTrackingEnabled false', function() {
    document.body.innerHTML = '<div id="root">Root</div>';

    const onSwiped = jest.fn();
    const element = document.getElementById('root');
    const VanillaSwipe = new VS({ element, onSwiped });

    VanillaSwipe.init();

    const mousedown = Helpers.createEvent('mousedown', Helpers.createMouseEventObject(1, 1));
    const mousemove = Helpers.createEvent('mousemove', Helpers.createMouseEventObject(1000, 1000));
    const mouseleave = Helpers.createEvent('mouseleave', Helpers.createMouseEventObject(100, 100));

    element && element.dispatchEvent(mousedown);
    element && element.dispatchEvent(mousemove);
    element && element.dispatchEvent(mouseleave);

    expect(VanillaSwipe.state.start === 0).toBe(true);
    expect(onSwiped).toHaveBeenCalledTimes(0);
  });

  it('should have expected behavior if mouseTrackingEnabled true', function() {
    document.body.innerHTML = '<div id="root">Root</div>';

    const onSwiped = jest.fn();
    const element = document.getElementById('root');
    const VanillaSwipe = new VS({ element, onSwiped, mouseTrackingEnabled: true });

    const mousedown = Helpers.createEvent('mousedown', Helpers.createMouseEventObject(1.5, 1.5));
    const mousemove = Helpers.createEvent('mousemove', Helpers.createMouseEventObject(1000, 1000));
    const mouseleave = Helpers.createEvent('mouseleave', {});

    VanillaSwipe.init();

    element && element.dispatchEvent(mousedown);
    element && element.dispatchEvent(mousemove);
    element && element.dispatchEvent(mouseleave);

    expect(onSwiped).toHaveBeenCalledTimes(1);
  });
});
