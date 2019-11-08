import VS from '../../src';
import * as Helpers from '../helpers';

describe('VanillaSwipe: handleMouseDown', function() {
  it('should have expected behavior', function() {
    const VanillaSwipe = new VS({ element: null });
    const mouseEventObject: any = Helpers.createMouseEventObject(0, 1);

    VanillaSwipe.handleMouseDown(mouseEventObject);
    expect(VanillaSwipe.state.start > 0).toBe(true);
  });
});
