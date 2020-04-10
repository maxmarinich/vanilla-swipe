export interface State {
  x: number;
  y: number;
  start: number;
  isSwiping: boolean;
}

export interface ConstructorProps {
  element?: HTMLElement | null;
  target?: HTMLElement | null;
  delta?: number | 10;
  rotationAngle?: number | 0;
  mouseTrackingEnabled?: boolean | false;
  touchTrackingEnabled?: boolean | true;
  preventDefaultTouchmoveEvent?: boolean | false;
  preventTrackingOnMouseleave?: boolean | false;
  onSwiping?: EventHandler;
  onSwiped?: EventHandler;
  onTap?: EventHandler;
}

export type EventHandler = { (e: Event, data: EventData): void };

export type EventData = {
  deltaX: number;
  deltaY: number;
  absX: number;
  absY: number;
  duration: number;
  velocity: number;
};
