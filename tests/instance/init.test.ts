import VS from '../../src';

describe('VanillaSwipe: init', function() {
  it('should be called', function() {
    const VanillaSwipe = new VS({ element: null });
    expect(VanillaSwipe.init()).toEqual(undefined);
  });
});
