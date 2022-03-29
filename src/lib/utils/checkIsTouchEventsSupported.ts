export const checkIsTouchEventsSupported = (): boolean => {
  return typeof window === 'object' && ('ontouchstart' in window || Boolean(window.navigator.maxTouchPoints));
};
