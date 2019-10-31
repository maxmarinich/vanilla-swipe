export function createClientXYObject(clientX: number, clientY: number) {
  return { clientX, clientY };
}

export function createStartTouchEventObject(x: number = 0, y: number = 0, preventDefault: Function = noop) {
  return {
    preventDefault,
    touches: [createClientXYObject(x, y)],
  };
}

export function createMoveTouchEventObject(
  x: number = 0,
  y: number = 0,
  includeTouches: boolean = true,
  preventDefault: Function = noop,
) {
  const position = createClientXYObject(x, y);
  const touches = includeTouches ? { touches: [position] } : {};

  return {
    ...createClientXYObject(x, y),
    changedTouches: [position],
    preventDefault,
    ...touches,
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
