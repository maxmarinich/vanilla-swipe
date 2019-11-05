import { getInitialProps } from '../../src/utils';

describe('checkIsPassiveSupported', () => {
  const defaultProps = {
    element: null,
    delta: 10,
    rotationAngle: 0,
    stopPropagation: false,
    mouseTrackingEnabled: false,
    touchTrackingEnabled: true,
    preventDefaultTouchmoveEvent: false,
  };

  it('should return expected data if props are passed', () => {
    expect(getInitialProps({ delta: 0 })).toEqual({ ...defaultProps, delta: 0 });
  });

  it('should return expected data if props are not passed', () => {
    expect(getInitialProps()).toEqual(defaultProps);
  });
});
