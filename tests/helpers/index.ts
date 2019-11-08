export function createClientXYObject(clientX: number, clientY: number) {
  return { clientX, clientY };
}

export function createTouchStartEventObject(x: number = 0, y: number = 0, preventDefault: Function = noop) {
  return {
    preventDefault,
    touches: [createClientXYObject(x, y)],
  };
}

export function createTouchMoveEventObject(
  x: number = 0,
  y: number = 0,
  touchesCount: number = 0,
  cancelable: boolean = true,
  preventDefault: Function = noop,
) {
  const position = createClientXYObject(x, y);
  const touches = touchesCount ? { touches: repeat(position, touchesCount) } : {};

  return {
    ...createClientXYObject(x, y),
    changedTouches: [position],
    preventDefault,
    ...touches,
    cancelable,
  };
}

export function createMouseEventObject(x: number = 0, y: number = 0, preventDefault: Function = noop) {
  return {
    ...createClientXYObject(x, y),
    preventDefault,
  };
}

export function createTouches(x: number, y: number, create: boolean) {
  return create ? { touches: createClientXYObject(x, y) } : {};
}

export function noop() {}
export function repeat(data: any, count = 0) {
  return Array(count).fill(data);
}

export function createEvent(eventName: string, options: any = {}) {
  return new MouseEvent(eventName, { bubbles: true, cancelable: true, ...options });
}
