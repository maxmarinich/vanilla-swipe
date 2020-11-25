export interface ConstructorProps {
  element?: HTMLElement | null;
  target?: HTMLElement | null;
  delta?: number | 10;
  directionDelta?: number | 0;
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
  directionX: Direction;
  directionY: Direction;
  duration: number;
  positionX?: number;
  positionY?: number;
  velocity: number;
};

export type State = {
  x: number;
  y: number;
  start: number;
  isSwiping: boolean;
  traceX: Trace;
  traceY: Trace;
};

export type Trace = number[];

export enum TraceDirectionKey {
  NEGATIVE = 'NEGATIVE',
  POSITIVE = 'POSITIVE',
  NONE = 'NONE',
}

export type TraceDirection = {
  [key in TraceDirectionKey | string]: number[];
};

export enum Direction {
  TOP = 'TOP',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  BOTTOM = 'BOTTOM',
  NONE = 'NONE',
}

export enum Axis {
  X = 'x',
  Y = 'y',
}

export type EventHandler = { (e: Event, data: EventData): void };
