export const getInitialProps = (props = {}) => {
  return {
    element: null,
    delta: 10,
    rotationAngle: 0,
    stopPropagation: false,
    mouseTrackingEnabled: false,
    touchTrackingEnabled: true,
    preventDefaultTouchmoveEvent: false,
    ...props,
  };
};
