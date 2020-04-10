import VS from '../../src/lib';

describe('VanillaSwipe: init', function() {
  it('should be called', function() {
    const VanillaSwipe = new VS({ element: null });
    expect(VanillaSwipe.init()).toEqual(undefined);
  });
});
