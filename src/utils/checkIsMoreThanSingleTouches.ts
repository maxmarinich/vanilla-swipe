export const checkIsMoreThanSingleTouches = (e: any) => {
  return e.touches && e.touches.length > 1;
};
