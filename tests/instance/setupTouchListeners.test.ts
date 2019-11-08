import VS from '../../src';

describe('VanillaSwipe: setupTouchListeners', function() {
  it('should return expected data if no elenment', function() {
    const VanillaSwipe = new VS({ element: null });
    VanillaSwipe.init();
    expect(VanillaSwipe.setupTouchListeners()).toEqual(undefined);
  });

  it('should return expected data if no elenment && touchTrackingEnabled', function() {
    const VanillaSwipe = new VS({ element: null, touchTrackingEnabled: true });
    VanillaSwipe.init();
    expect(VanillaSwipe.setupTouchListeners()).toEqual(undefined);
  });

  it('should return expected data if elenment && not touchTrackingEnabled', function() {
    document.body.innerHTML = '<div id="root">Root</div>';

    const element = document.getElementById('root');
    const VanillaSwipe = new VS({ element, touchTrackingEnabled: false });

    VanillaSwipe.init();
    expect(VanillaSwipe.setupTouchListeners()).toEqual(undefined);
  });

  it('should return expected data if elenment', function() {
    document.body.innerHTML = '<div id="root">Root</div>';

    const element = document.getElementById('root');
    const VanillaSwipe = new VS({ element });

    VanillaSwipe.init();
    expect(VanillaSwipe.setupTouchListeners()).toEqual(undefined);
  });
});
