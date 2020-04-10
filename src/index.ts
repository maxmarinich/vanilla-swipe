import VanillaSwipe, { EventData } from './lib';

if (module.hot) module.hot.accept();

const element = document.getElementById('root');
const target = document.getElementById('stick');
const shadow = document.getElementById('shadow');
const info = document.getElementById('info');

const VS = new VanillaSwipe({
  element,
  target,
  mouseTrackingEnabled: true,
  preventTrackingOnMouseleave: true,
  preventDefaultTouchmoveEvent: true,
  onSwiping,
  onSwiped,
  onTap,
});

VS.init();

function onTap(e: Event, data: EventData) {
  return handler(e, data, 'onTap');
}

function onSwiping(e: Event, data: EventData) {
  if (shadow) {
    const { deltaX, deltaY } = data;
    shadow.style.cssText = `
      display: block;
      transform: translate(${deltaX}px, ${-deltaY}px);
    `;
  }
  return handler(e, data, 'onSwiping')
}

function onSwiped(e: Event, data: EventData) {
  if (shadow) shadow.style.cssText = '';
  return handler(e, data, 'onSwiped');
}

function handler(e: Event, data: EventData, listener: string ) {
  const { deltaX, deltaY, absX, absY, duration, velocity } = data;

  if (info) {
    info.innerText = `
      EventType: ${e.type}
      Listener: ${listener}
      DeltaX: ${deltaX}
      DeltaY: ${deltaY}
      AbsX: ${absX}
      AbsY: ${absY}
      Duration: ${duration}
      Velocity: ${velocity}
    `;
  }
}
