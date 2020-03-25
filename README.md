# vanilla-swipe

Tiny vanilla JS library to detect swipe direction.

[![Build Status](https://travis-ci.com/maxmarinich/vanilla-swipe.svg?branch=master)](https://travis-ci.com/maxmarinich/vanilla-swipe)
[![npm version](https://badge.fury.io/js/vanilla-swipe.svg)](https://img.shields.io/badge/coverage-100%25-brightgreen)
[![covarage](https://img.shields.io/badge/coverage-100%25-brightgreen)](https://img.shields.io/badge/coverage-100%25-brightgreen)

### Types

```typescript
type ConstructorProps = {
  element?: HTMLElement | null;
  rotationAngle?: number | 0;
  delta?: number | 10; // minimum distance to the start of the swiping (px)
  mouseTrackingEnabled?: boolean | false;
  touchTrackingEnabled?: boolean | true;
  preventDefaultTouchmoveEvent?: boolean | false; // stop the browser scrolling while swiping
  preventTrackingOnMouseleave?: boolean | false; // fired onSwiped or onTap handlers when the cursor leaves the element's borders
  onSwiping?: EventHandler;
  onSwiped?: EventHandler;
  onTap?: (e: Event) => void;
};

type EventHandler = {
  (
    e: Event,
    deltaX: number,
    deltaY: number,
    absX: number,
    absY: number,
    duration: number, // ms
    velocity: number // (px/ms)
  ): void;
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
  element: document.getElementById('some-id'),
  onSwiping: handler,
  onSwiped: handler,
  mouseTrackingEnabled: true,
});

VS.init();

function handler() {
  console.log(...arguments); // -> Event, deltaX, deltaY, absX, absY, duration, velocity
}
```

### _Tests_

```
npm test
```

### _Coverage_

```
npm run testWithCoverage
```
