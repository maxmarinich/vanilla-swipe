export const getInitialProps = (props = {}) => {
  return {
    element: null,
    delta: 10,
    rotationAngle: 0,
    mouseTrackingEnabled: false,
    touchTrackingEnabled: true,
    preventDefaultTouchmoveEvent: false,
    preventTrackingOnMouseleave: false,
    ...props,
  };
};
