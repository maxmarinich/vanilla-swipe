export const checkIsMoreThanSingleTouches = (e: any): boolean => {
  return Boolean(e.touches && e.touches.length > 1);
};
