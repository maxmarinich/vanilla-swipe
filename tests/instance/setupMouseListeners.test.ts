import VS from '../../src/lib';

describe('VanillaSwipe: setupMouseListeners', function() {
  it('should return expected data if no elenment && not mouseTrackingEnabled', function() {
    const VanillaSwipe = new VS({ element: null });
    VanillaSwipe.init();
    expect(VanillaSwipe.setupMouseListeners()).toEqual(undefined);
  });

  it('should return expected data if no elenment && mouseTrackingEnabled', function() {
    const VanillaSwipe = new VS({ element: null, mouseTrackingEnabled: true });
    VanillaSwipe.init();
    expect(VanillaSwipe.setupMouseListeners()).toEqual(undefined);
  });

  it('should return expected data if elenment && not mouseTrackingEnabled', function() {
    document.body.innerHTML = '<div id="root">Root</div>';

    const element = document.getElementById('root');
    const VanillaSwipe = new VS({ element, mouseTrackingEnabled: false });

    VanillaSwipe.init();
    expect(VanillaSwipe.setupMouseListeners()).toEqual(undefined);
  });

  it('should return expected data if elenment && mouseTrackingEnabled', function() {
    document.body.innerHTML = '<div id="root">Root</div>';

    const element = document.getElementById('root');
    const VanillaSwipe = new VS({ element, mouseTrackingEnabled: true });

    VanillaSwipe.init();
    expect(VanillaSwipe.setupMouseListeners()).toEqual(undefined);
  });
});
