export interface ConstructorProps {
  element?: HTMLElement | null;
  target?: HTMLElement | null;
  delta?: number | 10;
  rotationAngle?: number | 0;
  mouseTrackingEnabled?: boolean | false;
  touchTrackingEnabled?: boolean | true;
  preventDefaultTouchmoveEvent?: boolean | false;
  preventTrackingOnMouseleave?: boolean | false;
  onSwipeStart?: EventHandler;
  onSwiping?: EventHandler;
  onSwiped?: EventHandler;
  onTap?: EventHandler;
}

export type EventData = {
  absX: number;
  absY: number;
  deltaX: number;
  deltaY: number;
  directionX: string,
  directionY: string,
  duration: number;
  velocity: number;
};

export type State = {
  x: number;
  y: number;
  start: number;
  isSwiping: boolean;
  traceX: Trace;
  traceY: Trace;
}

export type Trace = number[];

export type EventHandler = { (e: Event, data: EventData): void };
