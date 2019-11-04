# vanilla-swipe

Tiny vanilla JS library to detect swipe direction.

[![npm version](https://badge.fury.io/js/vanilla-swipe.svg)](https://badge.fury.io/js/vanilla-swipe)
[![Build Status](https://travis-ci.com/maxmarinich/vanilla-swipe.svg?branch=master)](https://travis-ci.com/maxmarinich/vanilla-swipe)

### Types

```typescript
type ConstructorProps = {
  element: HTMLElement | null;
  rotationAngle: number | 0;
  delta: number | 10; // minimum distance to the start of the swiping (px)
  mouseTrackingEnabled?: boolean | false;
  touchTrackingEnabled?: boolean | true;
  preventDefaultTouchmoveEvent?: boolean | false; // stop the browser scrolling while swiping
  onSwiping?: EventHandler;
  onSwiped?: EventHandler;
  onTap?: (e: Event) => void;
};

type EventHandler = {
  (e: Event, deltaX: number, deltaY: number, absX: number, absY: number, duration: number): void;
};
```

### _Methods_

- `init(): void`
- `update(options: ConstructorProps): void`
- `destroy(): void`

### _Install_

```bash
npm install vanilla-swipe
```

### _Examples_

```js
import VanillaSwipe from 'vanilla-swipe';

const VS = new VanillaSwipe({
  element: document.getElementById('some-id');
  onSwiping: handler,
  onSwiped: handler,
  mouseTrackingEnabled: true,
});

VS.init();

function handler() {
  console.log(...arguments); // -> Event, deltaX, deltaY, absX, absY, duration
}
```

### _Tests_

```
npm test
```
