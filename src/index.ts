import { State, ConstructorProps } from './types';
import * as Utils from './utils';

export default class VanillaSwipe {
  state: State;
  props: ConstructorProps;
  isPassiveSupported: boolean;

  constructor(props: ConstructorProps) {
    this.state = Utils.getInitialState();
    this.props = Utils.getInitialProps(props);
    this.isPassiveSupported = Utils.checkIsPassiveSupported();

    this.handleSwipeStart = this.handleSwipeStart.bind(this);
    this.handleSwipeMove = this.handleSwipeMove.bind(this);
    this.handleSwipeEnd = this.handleSwipeEnd.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  init() {
    this.setupTouchListeners();
    this.setupMouseListeners();
  }

  update(props: ConstructorProps) {
    const prevProps = this.props;
    const nextProps = Object.assign({}, prevProps, props);

    if (prevProps.element !== nextProps.element) {
      this.destroy();
      this.props = nextProps;
      this.init();

      return;
    }

    this.props = nextProps;

    if (prevProps.mouseTrackingEnabled !== nextProps.mouseTrackingEnabled) {
      nextProps.mouseTrackingEnabled ? this.setupMouseListeners() : this.cleanupMouseListeners();
    }

    if (prevProps.touchTrackingEnabled !== nextProps.touchTrackingEnabled) {
      nextProps.touchTrackingEnabled ? this.setupTouchListeners() : this.cleanupTouchListeners();
    }
  }

  destroy() {
    this.cleanupMouseListeners();
    this.cleanupTouchListeners();

    this.state = Utils.getInitialState();
    this.props = Utils.getInitialProps();
  }

  setupTouchListeners() {
    const { element, touchTrackingEnabled } = this.props;

    if (element && touchTrackingEnabled) {
      const options = this.isPassiveSupported ? { passive: false } : {};

      element.addEventListener('touchstart', this.handleSwipeStart, options);
      element.addEventListener('touchmove', this.handleSwipeMove, options);
      element.addEventListener('touchend', this.handleSwipeEnd, options);
    }
  }

  cleanupTouchListeners() {
    const { element } = this.props;

    if (element) {
      element.removeEventListener('touchstart', this.handleSwipeStart);
      element.removeEventListener('touchmove', this.handleSwipeMove);
      element.removeEventListener('touchend', this.handleSwipeEnd);
    }
  }

  setupMouseListeners() {
    const { element, mouseTrackingEnabled } = this.props;

    if (element && mouseTrackingEnabled) {
      element.addEventListener('mousedown', this.handleMouseDown);
      element.addEventListener('mousemove', this.handleMouseMove);
      element.addEventListener('mouseup', this.handleMouseUp);
      element.addEventListener('mouseleave', this.handleMouseLeave);
    }
  }

  cleanupMouseListeners() {
    const { element } = this.props;

    if (element) {
      element.removeEventListener('mousedown', this.handleMouseDown);
      element.removeEventListener('mousemove', this.handleMouseMove);
      element.removeEventListener('mouseup', this.handleMouseUp);
      element.removeEventListener('mouseleave', this.handleMouseLeave);
    }
  }

  getPosition(e: TouchEvent | MouseEvent) {
    const { x, y, start } = this.state;
    const { rotationAngle } = this.props;
    const movingPosition = Utils.calculateMovingPosition(e);
    const rotatePosition = Utils.rotateByAngle(movingPosition, rotationAngle);

    return Utils.calculatePosition({ x, y, start }, rotatePosition);
  }

  handleSwipeStart(e: any) {
    if (Utils.checkIsMoreThanSingleTouches(e)) return;

    const { rotationAngle } = this.props;
    const movingPosition = Utils.calculateMovingPosition(e);
    const { x, y } = Utils.rotateByAngle(movingPosition, rotationAngle);

    this.state = { start: Date.now(), x, y, isSwiping: false };
  }

  handleSwipeMove(e: any) {
    const { x, y } = this.state;

    if (!x || !y || Utils.checkIsMoreThanSingleTouches(e)) return;

    const { absX, absY, deltaX, deltaY, duration } = this.getPosition(e);
    const { delta = 0, onSwiping, preventDefaultTouchmoveEvent } = this.props;

    if (e.cancelable && preventDefaultTouchmoveEvent) e.preventDefault();

    if (absX < delta && absY < delta) return;

    this.state.isSwiping = true;

    if (onSwiping) {
      onSwiping(e, deltaX, deltaY, absX, absY, duration);
    }
  }

  handleSwipeEnd(e: any) {
    const { onSwiped, onTap } = this.props;

    if (this.state.isSwiping) {
      const position = this.getPosition(e);
      const { deltaX, deltaY, absX, absY, duration } = position;

      onSwiped && onSwiped(e, deltaX, deltaY, absX, absY, duration);
    } else {
      onTap && onTap(e);
    }

    this.state = Utils.getInitialState();
  }

  handleMouseDown(e: MouseEvent) {
    this.handleSwipeStart(e);
  }

  handleMouseMove(e: MouseEvent) {
    this.handleSwipeMove(e);
  }

  handleMouseUp(e: MouseEvent) {
    this.handleSwipeEnd(e);
  }

  handleMouseLeave() {
    const { element } = this.props;
    const { isSwiping } = this.state;

    if (element && isSwiping) {
      element.dispatchEvent(new Event('mouseup', { bubbles: true, cancelable: true }));
    }
  }
}
