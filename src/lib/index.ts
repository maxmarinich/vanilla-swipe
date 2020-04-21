import { State, ConstructorProps } from './types';
import * as Utils from './utils';
export * from './types';

export default class VanillaSwipe {
  state: State;
  props: ConstructorProps;

  constructor(props: ConstructorProps) {
    this.state = Utils.getInitialState();
    this.props = Utils.getInitialProps(props);

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

    if (prevProps.element !== nextProps.element || prevProps.target !== nextProps.target) {
      this.destroy();
      this.props = nextProps;
      this.init();

      return;
    }

    this.props = nextProps;

    if (
      prevProps.mouseTrackingEnabled !== nextProps.mouseTrackingEnabled ||
      prevProps.preventTrackingOnMouseleave !== nextProps.preventTrackingOnMouseleave
    ) {
      this.cleanupMouseListeners();
      nextProps.mouseTrackingEnabled ? this.setupMouseListeners() : this.cleanupMouseListeners();
    }

    if (
      prevProps.touchTrackingEnabled !== nextProps.touchTrackingEnabled
    ) {
      this.cleanupTouchListeners();
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
    const { element, target, touchTrackingEnabled } = this.props;

    if (element && touchTrackingEnabled) {
      const listener = target || element;
      const isPassiveSupported = Utils.checkIsPassiveSupported();
      const options = Utils.getOptions(isPassiveSupported);

      listener.addEventListener('touchstart', this.handleSwipeStart, options);
      listener.addEventListener('touchmove', this.handleSwipeMove, options);
      listener.addEventListener('touchend', this.handleSwipeEnd, options);
    }
  }

  cleanupTouchListeners() {
    const { element, target } = this.props;
    const listener = target || element;

    if (listener) {
      listener.removeEventListener('touchstart', this.handleSwipeStart);
      listener.removeEventListener('touchmove', this.handleSwipeMove);
      listener.removeEventListener('touchend', this.handleSwipeEnd);
    }
  }

  setupMouseListeners() {
    const { element, mouseTrackingEnabled, preventTrackingOnMouseleave } = this.props;

    if (mouseTrackingEnabled && element) {
      element.addEventListener('mousedown', this.handleMouseDown);
      element.addEventListener('mousemove', this.handleMouseMove);
      element.addEventListener('mouseup', this.handleMouseUp);

      if (preventTrackingOnMouseleave) {
        element.addEventListener('mouseleave', this.handleMouseLeave);
      }
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

  getEventData(e: TouchEvent | MouseEvent) {
    const { rotationAngle } = this.props;
    const movingPosition = Utils.calculateMovingPosition(e);
    const rotatePosition = Utils.rotateByAngle(movingPosition, rotationAngle);

    return Utils.calculatePosition(this.state, rotatePosition);
  }

  handleSwipeStart(e: any) {
    if (Utils.checkIsMoreThanSingleTouches(e)) return;

    const { rotationAngle } = this.props;
    const movingPosition = Utils.calculateMovingPosition(e);
    const { x, y } = Utils.rotateByAngle(movingPosition, rotationAngle);

    this.state = Utils.getInitialState({ start: Date.now(), x, y, isSwiping: false });
  }

  handleSwipeMove(e: any) {
    const { x, y, isSwiping } = this.state;

    if (!x || !y || Utils.checkIsMoreThanSingleTouches(e)) return;

    const { absX, absY, deltaX, deltaY, directionX, directionY, duration, velocity } = this.getEventData(e);
    const { delta, preventDefaultTouchmoveEvent, onSwipeStart, onSwiping } = this.props;

    if (e.cancelable && preventDefaultTouchmoveEvent) e.preventDefault();

    if (absX < Number(delta) && absY < Number(delta) && !isSwiping) return;

    if (onSwipeStart && !isSwiping) {
      onSwipeStart(e, { deltaX, deltaY, absX, absY, directionX, directionY, duration, velocity });
    }

    this.state.isSwiping = true;

    if (onSwiping) {
      onSwiping(e, { deltaX, deltaY, absX, absY, directionX, directionY, duration, velocity });
    }
  }

  handleSwipeEnd(e: any) {
    const { onSwiped, onTap } = this.props;

    if (this.state.isSwiping) {
      const position = this.getEventData(e);
      onSwiped && onSwiped(e, position);
    } else {
      const position = this.getEventData(e);
      onTap && onTap(e, position);
    }

    this.state = Utils.getInitialState();
  }

  handleMouseDown(e: MouseEvent) {
    const { target } = this.props;

    if (target) {
      if (target === e.target) {
        this.handleSwipeStart(e);
      }
    } else {
      this.handleSwipeStart(e);
    }
  }

  handleMouseMove(e: MouseEvent) {
    this.handleSwipeMove(e);
  }

  handleMouseUp(e: MouseEvent) {
    const { isSwiping } = this.state;
    const { target } = this.props;

    if (target) {
      if (target === e.target || isSwiping) {
        this.handleSwipeEnd(e);
      }
    } else {
      this.handleSwipeEnd(e);
    }
  }

  handleMouseLeave(e: MouseEvent) {
    const { isSwiping } = this.state;

    if (isSwiping) {
      this.handleSwipeEnd(e);
    }
  }
}
