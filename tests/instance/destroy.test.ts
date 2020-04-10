import VS from '../../src/lib';
import * as Utils from '../../src/lib/utils';

describe('VanillaSwipe: destroy', function() {
  it('should return default data', function() {
    const onTap = () => {};
    const onSwiping = () => {};
    const onSwiped = () => {};

    const VanillaSwipe = new VS({
      element: null,
      onSwiped,
      onSwiping,
      onTap,
      touchTrackingEnabled: false,
      mouseTrackingEnabled: true,
      delta: 100,
      preventDefaultTouchmoveEvent: true,
    });

    VanillaSwipe.destroy();

    expect(VanillaSwipe.state).toEqual(Utils.getInitialState());
    expect(VanillaSwipe.props).toEqual(Utils.getInitialProps());
  });
});
