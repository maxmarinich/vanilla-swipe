import VS from '../../src/lib';

describe('VanillaSwipe: cleanupMouseListeners', function() {
  it('should return expected data if no elenment', function() {
    const VanillaSwipe = new VS({ element: null });
    VanillaSwipe.init();
    expect(VanillaSwipe.cleanupMouseListeners()).toEqual(undefined);
  });

  it('should return expected data if elenment', function() {
    document.body.innerHTML = '<div id="root">Root</div>';

    const element = document.getElementById('root');
    const VanillaSwipe = new VS({ element });

    VanillaSwipe.init();
    expect(VanillaSwipe.cleanupMouseListeners()).toEqual(undefined);
  });
});
