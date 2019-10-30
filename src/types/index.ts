export interface State {
  x: number;
  y: number;
  start: number;
  isSwiping: boolean;
}

export interface ConstructorProps {
  element: HTMLElement | null;
  rotationAngle: number | 0;
  delta: number | 10;
  stopPropagation?: boolean | false;
  mouseTrackingEnabled?: boolean | false;
  touchTrackingEnabled?: boolean | true;
  preventDefaultTouchmoveEvent?: boolean | false;
  onSwiping?: EventHandler;
  onSwiped?: EventHandler;
  onTap?: (e: Event) => void;
}

type EventHandler = {
  (e: Event, deltaX: number, deltaY: number, absX: number, absY: number, duration: number): void;
};
