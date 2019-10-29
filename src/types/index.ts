export interface State {
  x: number | null;
  y: number | null;
  start: number | null;
  isSwiping: boolean;
}

export interface ConstructorProps {
  element: HTMLElement | null;
  rotationAngle: number;
  delta: number;
  onSwiping?: Function;
  onSwiped?: Function;
  onTap?: Function;
  stopPropagation?: boolean;
  mouseTrackingEnabled?: boolean;
  touchTrackingEnabled?: boolean;
  preventDefaultTouchmoveEvent?: boolean;
}
