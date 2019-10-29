export function calculateMovingPosition(e: TouchEvent | MouseEvent) {
  if ('changedTouches' in e) {
    const touches = e.changedTouches[0];

    return {
      x: touches.clientX,
      y: touches.clientY,
    };
  }

  return { x: e.clientX, y: e.clientY };
}
