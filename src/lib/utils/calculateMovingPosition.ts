export function calculateMovingPosition<T extends E>(e: TouchEvent | MouseEvent | T) {
  if ('changedTouches' in e) {
    const touches: any = e.changedTouches && e.changedTouches[0];

    return {
      x: touches && touches.clientX,
      y: touches && touches.clientY,
    };
  }

  return { x: e.clientX, y: e.clientY };
}

type E = {
  clientX: number;
  clientY: number;
  changedTouches?: { clientX: number; clientY: number }[];
  preventDefault?: Function;
};
