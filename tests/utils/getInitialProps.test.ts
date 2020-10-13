import { getInitialProps } from '../../src/lib/utils';

describe('getInitialProps', () => {
  const defaultProps = {
    element: null,
    delta: 10,
    directionDelta: 0,
    rotationAngle: 0,
    mouseTrackingEnabled: false,
    touchTrackingEnabled: true,
    preventDefaultTouchmoveEvent: false,
    preventTrackingOnMouseleave: false,
  };

  it('should return expected data if props are passed', () => {
    expect(getInitialProps({
      delta: 0,
      preventTrackingOnMouseleave: true,
    })).toEqual({
      ...defaultProps,
      delta: 0,
      preventTrackingOnMouseleave: true,
    });
  });

  it('should return expected data if props are not passed', () => {
    expect(getInitialProps()).toEqual(defaultProps);
  });
});
