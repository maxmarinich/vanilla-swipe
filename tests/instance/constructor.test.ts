import VS from '../../src';
import * as Utils from '../../src/utils';

describe('VanillaSwipe: constructor', function() {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should return default data from constructor', function() {
    const VanillaSwipe = new VS({ element: null });

    expect(VanillaSwipe.state).toEqual(Utils.getInitialState());
    expect(VanillaSwipe.props).toEqual(Utils.getInitialProps());
  });

  it('should return default data from constructor', function() {
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

    expect(VanillaSwipe.props).toEqual({
      ...Utils.getInitialProps(),
      element: null,
      onSwiped,
      onSwiping,
      onTap,
      touchTrackingEnabled: false,
      mouseTrackingEnabled: true,
      delta: 100,
      preventDefaultTouchmoveEvent: true,
    });
  });
});
