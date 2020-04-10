import VS from '../../src/lib';
import * as Helpers from '../helpers';

describe('VanillaSwipe: handleMouseDown', function() {
  it('should have expected behavior', function() {
    const VanillaSwipe = new VS({ element: null });
    const mouseEventObject: any = Helpers.createMouseEventObject(0, 1);

    VanillaSwipe.handleMouseDown(mouseEventObject);
    expect(VanillaSwipe.state.start > 0).toBe(true);
  });

  it('should have expected behavior if target specified', function() {
    const target = document.createElement('div');
    const VanillaSwipe = new VS({ element: null, target });
    const mouseEventObject: any = Helpers.createMouseEventObject(0, 1);

    VanillaSwipe.handleMouseDown(mouseEventObject);
    expect(VanillaSwipe.state.start > 0).toBe(false);
  });

  it('should have expected behavior if target is e.target', function() {
    const target = document.createElement('div');
    const VanillaSwipe = new VS({ element: null, target });
    const mouseEventObject: any = Helpers.createMouseEventObject(0, 1);

    VanillaSwipe.handleMouseDown({ ...mouseEventObject, target });
    expect(VanillaSwipe.state.start > 0).toBe(true);
  });
});
