import VS from '../src';
import * as Utils from '../src/utils';

describe('VanillaSwipe', function() {
  it('should return expected data from constructor', function() {
    const VanillaSwipe = new VS({ element: null });

    expect(VanillaSwipe.state).toEqual(Utils.getInitialState());
    expect(VanillaSwipe.props).toEqual(Utils.getInitialProps());
  });

  it('should call `init() method`', function() {
    const VanillaSwipe = new VS({ element: null });

    expect(VanillaSwipe.state).toEqual(Utils.getInitialState());
    expect(VanillaSwipe.props).toEqual(Utils.getInitialProps());
  });
});
