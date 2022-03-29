import VanillaSwipe, { EventData } from './lib';

if (module.hot) module.hot.accept();

const element = document.getElementById('pad');
const target = document.getElementById('stick');
const shadow = document.getElementById('shadow');
const info = document.getElementById('info');
const resetBtn = document.getElementById('reset');
const state = { isSwipeStarted: false, delta: 15, directionDelta: 15 };

const VS = new VanillaSwipe({
  element,
  target,
  delta: state.delta,
  directionDelta: state.directionDelta,
  mouseTrackingEnabled: true,
  preventTrackingOnMouseleave: true,
  preventDefaultTouchmoveEvent: true,
  onSwipeStart,
  onSwiping,
  onSwiped,
  onTap,
});

VS.init();
reset();

if (resetBtn) {
  resetBtn.onclick = reset;
}

function onTap(e: Event, data: EventData) {
  return handler(e, data, 'onTap');
}

function onSwipeStart() {
  state.isSwipeStarted = true;
}

function onSwiping(e: Event, data: EventData) {
  if (shadow) {
    const { deltaX, deltaY } = data;
    shadow.style.cssText = `
      display: block;
      transform: translate(${deltaX}px, ${-deltaY}px);
    `;
  }
  return handler(e, data, 'onSwiping');
}

function onSwiped(e: Event, data: EventData) {
  if (shadow) shadow.style.cssText = '';
  state.isSwipeStarted = false;
  return handler(e, data, 'onSwiped');
}

function handler(e: Event, data: EventData, listener: string ) {
  const { deltaX, deltaY, absX, absY, directionX, directionY, duration, velocity } = data;

  if (info) {
    info.innerText = `
      EventType: ${e.type}
      Listener: ${listener}
      DeltaX: ${deltaX}
      DeltaY: ${deltaY}
      AbsX: ${absX}
      AbsY: ${absY}
      DirectionX: ${directionX}
      DirectionY: ${directionY}
      Duration: ${duration}
      Velocity: ${velocity}
      Delta: ${state.delta}px
      DirectionDelta: ${state.directionDelta}px
      SwipeStarted: ${state.isSwipeStarted}
    `;
  }
}

function reset() {
  if (info) {
    info.innerText = `
        EventType: none
        Listener: none
        DeltaX: 0
        DeltaY: 0
        AbsX: 0
        AbsY: 0
        DirectionX: none
        DirectionY: none
        Duration: 0
        Velocity: 0
        Delta: ${state.delta}px
        DirectionDelta: ${state.directionDelta}px
        SwipeStarted: false
    `;
  }
}
