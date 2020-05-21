!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";function i(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),i(n(8)),i(n(9)),i(n(10)),i(n(2)),i(n(11)),i(n(12)),i(n(13)),i(n(3)),i(n(14)),i(n(15)),i(n(1)),i(n(16)),i(n(4))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createOptions=function(e={}){return Object.defineProperty(e,"passive",{get:function(){return this.isPassiveSupported=!0,!0},enumerable:!0}),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDuration=function(e=0,t=0){return e?t-e:0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculateVelocity=function(e,t,n){return Math.sqrt(e*e+t*t)/(n||1)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateTrace=function(e,t){return e[e.length-1]!==t&&e.push(t),e}},function(e,t,n){n(6),e.exports=n(18)},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(7));const s=document.getElementById("pad"),a=document.getElementById("stick"),r=document.getElementById("shadow"),l=document.getElementById("info"),c={isSwipeStarted:!1,delta:15};function u(e,t,n){const{deltaX:i,deltaY:o,absX:s,absY:a,directionX:r,directionY:u,duration:d,velocity:h}=t;l&&(l.innerText=`\n      EventType: ${e.type}\n      Listener: ${n}\n      DeltaX: ${i}\n      DeltaY: ${o}\n      AbsX: ${s}\n      AbsY: ${a}\n      DirectionX: ${r}\n      DirectionY: ${u}\n      Duration: ${d}\n      Velocity: ${h}\n      SwipeDelta: ${c.delta}px\n      SwipeStarted: ${c.isSwipeStarted}\n    `)}new o.default({element:s,target:a,delta:c.delta,mouseTrackingEnabled:!0,preventTrackingOnMouseleave:!0,preventDefaultTouchmoveEvent:!0,onSwipeStart:function(){c.isSwipeStarted=!0},onSwiping:function(e,t){if(r){const{deltaX:e,deltaY:n}=t;r.style.cssText=`\n      display: block;\n      transform: translate(${e}px, ${-n}px);\n    `}return u(e,t,"onSwiping")},onSwiped:function(e,t){r&&(r.style.cssText="");return c.isSwipeStarted=!1,u(e,t,"onSwiped")},onTap:function(e,t){return u(e,t,"onTap")}}).init()},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0));!function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(17));t.default=class{constructor(e){this.state=o.getInitialState(),this.props=o.getInitialProps(e),this.handleSwipeStart=this.handleSwipeStart.bind(this),this.handleSwipeMove=this.handleSwipeMove.bind(this),this.handleSwipeEnd=this.handleSwipeEnd.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}init(){this.setupTouchListeners(),this.setupMouseListeners()}update(e){const t=this.props,n=Object.assign({},t,e);if(t.element!==n.element||t.target!==n.target)return this.destroy(),this.props=n,void this.init();this.props=n,t.mouseTrackingEnabled===n.mouseTrackingEnabled&&t.preventTrackingOnMouseleave===n.preventTrackingOnMouseleave||(this.cleanupMouseListeners(),n.mouseTrackingEnabled?this.setupMouseListeners():this.cleanupMouseListeners()),t.touchTrackingEnabled!==n.touchTrackingEnabled&&(this.cleanupTouchListeners(),n.touchTrackingEnabled?this.setupTouchListeners():this.cleanupTouchListeners())}destroy(){this.cleanupMouseListeners(),this.cleanupTouchListeners(),this.state=o.getInitialState(),this.props=o.getInitialProps()}setupTouchListeners(){const{element:e,target:t,touchTrackingEnabled:n}=this.props;if(e&&n){const n=t||e,i=o.checkIsPassiveSupported(),s=o.getOptions(i);n.addEventListener("touchstart",this.handleSwipeStart,s),n.addEventListener("touchmove",this.handleSwipeMove,s),n.addEventListener("touchend",this.handleSwipeEnd,s)}}cleanupTouchListeners(){const{element:e,target:t}=this.props,n=t||e;n&&(n.removeEventListener("touchstart",this.handleSwipeStart),n.removeEventListener("touchmove",this.handleSwipeMove),n.removeEventListener("touchend",this.handleSwipeEnd))}setupMouseListeners(){const{element:e,mouseTrackingEnabled:t,preventTrackingOnMouseleave:n}=this.props;t&&e&&(e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("mousemove",this.handleMouseMove),e.addEventListener("mouseup",this.handleMouseUp),n&&e.addEventListener("mouseleave",this.handleMouseLeave))}cleanupMouseListeners(){const{element:e}=this.props;e&&(e.removeEventListener("mousedown",this.handleMouseDown),e.removeEventListener("mousemove",this.handleMouseMove),e.removeEventListener("mouseup",this.handleMouseUp),e.removeEventListener("mouseleave",this.handleMouseLeave))}getEventData(e){const{rotationAngle:t}=this.props,n=o.calculateMovingPosition(e),i=o.rotateByAngle(n,t);return o.calculatePosition(this.state,i)}handleSwipeStart(e){if(o.checkIsMoreThanSingleTouches(e))return;const{rotationAngle:t}=this.props,n=o.calculateMovingPosition(e),{x:i,y:s}=o.rotateByAngle(n,t);this.state=o.getInitialState({start:Date.now(),x:i,y:s,isSwiping:!1})}handleSwipeMove(e){const{x:t,y:n,isSwiping:i}=this.state;if(!t||!n||o.checkIsMoreThanSingleTouches(e))return;const{absX:s,absY:a,deltaX:r,deltaY:l,directionX:c,directionY:u,duration:d,velocity:h}=this.getEventData(e),{delta:p,preventDefaultTouchmoveEvent:v,onSwipeStart:g,onSwiping:f}=this.props;e.cancelable&&v&&e.preventDefault(),s<Number(p)&&a<Number(p)&&!i||(g&&!i&&g(e,{deltaX:r,deltaY:l,absX:s,absY:a,directionX:c,directionY:u,duration:d,velocity:h}),this.state.isSwiping=!0,f&&f(e,{deltaX:r,deltaY:l,absX:s,absY:a,directionX:c,directionY:u,duration:d,velocity:h}))}handleSwipeEnd(e){const{onSwiped:t,onTap:n}=this.props,i=this.getEventData(e);this.state.isSwiping?t&&t(e,i):n&&n(e,i),this.state=o.getInitialState()}handleMouseDown(e){const{target:t}=this.props;t?t===e.target&&this.handleSwipeStart(e):this.handleSwipeStart(e)}handleMouseMove(e){this.handleSwipeMove(e)}handleMouseUp(e){const{isSwiping:t}=this.state,{target:n}=this.props;n?(n===e.target||t)&&this.handleSwipeEnd(e):this.handleSwipeEnd(e)}handleMouseLeave(e){const{isSwiping:t}=this.state;t&&this.handleSwipeEnd(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialState=(e={})=>({x:0,y:0,start:0,isSwiping:!1,traceX:[],traceY:[],...e})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialProps=(e={})=>({element:null,delta:10,rotationAngle:0,mouseTrackingEnabled:!1,touchTrackingEnabled:!0,preventDefaultTouchmoveEvent:!1,preventTrackingOnMouseleave:!1,...e})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1);t.checkIsPassiveSupported=function(e=!1){let n={isPassiveSupported:e};try{const e=i.createOptions(n);window.addEventListener("checkIsPassiveSupported",t.noop,e),window.removeEventListener("checkIsPassiveSupported",t.noop,e)}catch(e){}return n.isPassiveSupported},t.noop=()=>{}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDirection=function(e,t){let n,i="LEFT",o="RIGHT";const s=e[e.length-1],a=e[e.length-2]||0;return e.every(e=>0===e)?"NONE":("y"===t&&(i="BOTTOM",o="TOP"),n=s>a?o:i,0===s&&(n=a<0?o:i),n)}},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),s=n(3),a=n(4),r=i(n(0));t.calculatePosition=function(e,t){const n=t.x-e.x,i=e.y-t.y,l=Math.abs(n),c=Math.abs(i);a.updateTrace(e.traceX,n),a.updateTrace(e.traceY,i);const u=r.calculateDirection(e.traceX,"x"),d=r.calculateDirection(e.traceY,"y"),h=o.calculateDuration(e.start,Date.now());return{absX:l,absY:c,deltaX:n,deltaY:i,directionX:u,directionY:d,duration:h,velocity:s.calculateVelocity(l,c,h)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculateMovingPosition=function(e){if("changedTouches"in e){const t=e.changedTouches&&e.changedTouches[0];return{x:t&&t.clientX,y:t&&t.clientY}}return{x:e.clientX,y:e.clientY}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rotateByAngle=function(e,t=0){if(0===t)return e;const{x:n,y:i}=e,o=Math.PI/180*t;return{x:n*Math.cos(o)+i*Math.sin(o),y:i*Math.cos(o)-n*Math.sin(o)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkIsMoreThanSingleTouches=e=>Boolean(e.touches&&e.touches.length>1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOptions=function(e=!1){return e?{passive:!1}:{}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t){e.exports='<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n    <title>\n      Vanilla Swipe Demo Page\n    </title>\n    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet" />\n    <style>\n      html,\n      body,\n      #root {\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        font-family: \'Roboto\', sans-serif;\n      }\n      h2 {\n        color: cadetblue;\n        text-align: center;\n        padding: 20px;\n        user-select: none;\n        margin: 0;\n      }\n      #logo {\n        display: inline-block;\n        margin: 0;\n        padding: 0 6px 0 0;\n        width: 20px;\n        line-height: 20px;\n        outline: none;\n      }\n      #root {\n        padding: 20px;\n        box-sizing: border-box;\n      }\n\n      #pad {\n        position: relative;\n        margin: 40px auto;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        max-width: 400px;\n        max-height: 400px;\n        background-color: #b1e9ea;\n        overflow: hidden;\n      }\n\n      #stick {\n        position: absolute;\n        width: 40px;\n        height: 40px;\n        background-color: #fff;\n        border-radius: calc(40px / 2);\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        margin: auto;\n      }\n\n      #info {\n        margin: auto;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        max-width: 400px;\n        max-height: 400px;\n        font-weight: bold;\n        font-size: 14px;\n        color: #3c5858;\n      }\n\n      #shadow {\n        position: absolute;\n        display: none;\n        pointer-events: none;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n        opacity: 0.4;\n        width: 40px;\n        height: 40px;\n        background-color: palevioletred;\n        border-radius: calc(40px / 2);\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        margin: auto;\n      }\n      #code {\n        display: block;\n        width: 20px;\n        height: 20px;\n        outline: none;\n        position: absolute;\n        top: 5px;\n        right: 5px;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="root">\n      <h2>\n        <a href="https://github.com/maxmarinich/vanilla-swipe" id="logo">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            version="1.1"\n            id="home-icon"\n            x="0px"\n            y="0px"\n            viewBox="0 0 511.999 511.999"\n            xml:space="preserve"\n          >\n            <title>Home Page</title>\n            <path\n              style="fill:#BDBCBC;"\n              d="M51.307,36.877v116.509c0,4.427,3.589,8.017,8.017,8.017h85.511c4.427,0,8.017-3.589,8.017-8.017  V36.877H51.307z"\n            />\n            <path\n              style="fill:#A7A6A6;"\n              d="M127.329,36.877v124.526h17.505c4.427,0,8.017-3.589,8.017-8.017V36.877H127.329z"\n            />\n            <path\n              style="fill:#E9E9E9;"\n              d="M161.937,0H42.221c-4.427,0-8.017,3.589-8.017,8.017v34.205c0,4.427,3.589,8.017,8.017,8.017h119.716  c4.427,0,8.017-3.589,8.017-8.017V8.017C169.954,3.59,166.364,0,161.937,0z"\n            />\n            <path\n              style="fill:#b1e9ea;"\n              d="M508.827,189.755L260.845,1.63c-2.865-2.173-6.826-2.173-9.689,0L3.172,189.755  c-2.743,2.08-3.851,5.68-2.753,8.942c1.098,3.263,4.156,5.461,7.598,5.461h39.015v299.824c0,4.427,3.589,8.017,8.017,8.017h401.903  c4.427,0,8.017-3.589,8.017-8.017V204.158h39.015c3.443,0,6.501-2.198,7.598-5.461C512.679,195.435,511.57,191.835,508.827,189.755z  "\n            />\n            <path\n              style="fill:cadetblue;"\n              d="M3.172,189.755c-2.743,2.08-3.851,5.68-2.753,8.942c1.098,3.263,4.156,5.461,7.598,5.461h39.015  v299.824c0,4.427,3.589,8.017,8.017,8.017h25.653v-381.06L3.172,189.755z"\n            />\n            <path\n              style="fill:#FFD791;"\n              d="M418.761,371.44c0-13.159-9.91-23.997-22.671-25.475h-2.982c14.168,0,25.653-11.485,25.653-25.653  s-11.485-25.653-25.653-25.653v-0.178c14.002,0,25.384-11.218,25.649-25.156c0.273-14.38-11.844-26.15-26.226-26.15h-98.784  c-4.427,0-8.017-3.589-8.017-8.017v-53.979c0-17.71-14.356-32.067-32.067-32.067h-19.774c-4.427,0-8.017,3.589-8.017,8.017v67.49  c0,0.961-0.173,1.914-0.511,2.814l-13.572,36.193c-1.174,3.129-4.164,5.202-7.506,5.202h-46.82v153.92h52.376v9.62  c0,8.855,7.179,16.033,16.033,16.033h166.656c14.382,0,26.499-11.77,26.226-26.149c-0.264-13.939-11.647-25.157-25.649-25.157  C407.274,397.093,418.761,385.608,418.761,371.44z"\n            />\n            <g>\n              <rect x="157.458" y="268.826" style="fill:#F8BE73;" width="43.49" height="153.92" />\n              <path\n                style="fill:#F8BE73;"\n                d="M418.398,316.036c-2.036,12.132-12.582,21.378-25.292,21.378l-25.939-0.019   c-2.362-0.002-4.279,1.913-4.279,4.276l0,0c0,2.36,1.912,4.273,4.272,4.276l25.945,0.019c14.168,0,25.653-11.485,25.653-25.653   C418.761,318.854,418.632,317.427,418.398,316.036z"\n              />\n              <path\n                style="fill:#F8BE73;"\n                d="M418.391,367.206c-2.053,12.112-12.588,21.336-25.285,21.336h-25.942   c-2.361,0-4.276,1.914-4.276,4.276l0,0c0,2.361,1.914,4.276,4.276,4.276h25.942c14.168,0,25.653-11.485,25.653-25.653   C418.761,369.996,418.621,368.586,418.391,367.206z"\n              />\n              <path\n                style="fill:#F8BE73;"\n                d="M418.392,418.391c-2.098,12.161-13.082,21.458-25.863,21.458H211.696   c2.689,5.084,8.024,8.551,14.176,8.551h166.657c14.382,0,26.499-11.77,26.226-26.149   C418.731,420.938,418.607,419.649,418.392,418.391z"\n              />\n            </g>\n            <path\n              style="fill:#F8BE73;"\n              d="M418.375,264.536c-2.103,12.053-12.614,21.215-25.269,21.215v0.178l-25.85-0.019  c-2.411-0.002-4.367,1.953-4.367,4.364l0,0c0,2.409,1.952,4.363,4.361,4.364l25.856,0.019v-0.178  c14.002,0,25.384-11.218,25.649-25.156C418.786,267.688,418.649,266.09,418.375,264.536z"\n            />\n            <path\n              style="fill:#FBFBFB;"\n              d="M178.751,235.156H93.239c-4.427,0-8.017,3.588-8.017,8.017V448.4c0,4.428,3.589,8.017,8.017,8.017  h85.511c4.427,0,8.017-3.588,8.017-8.017V243.173C186.767,238.746,183.178,235.156,178.751,235.156z"\n            />\n            <path\n              style="fill:#FF8C78;"\n              d="M136.572,380.526c-13.851,0-25.119,11.268-25.119,25.119c0,13.851,11.268,25.119,25.119,25.119  s25.119-11.268,25.119-25.119C161.691,391.794,150.423,380.526,136.572,380.526z"\n            />\n            <path\n              style="fill:#DF7A6E;"\n              d="M136.572,389.323c-9,0-16.322,7.322-16.322,16.322c0,9,7.322,16.322,16.322,16.322  s16.322-7.322,16.322-16.322C152.894,396.644,145.572,389.323,136.572,389.323z"\n            />\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n          </svg>\n        </a>\n        Vanilla Swipe Playground\n      </h2>\n      <div id="pad">\n        <div id="stick"></div>\n        <div id="shadow"></div>\n        <a href="https://github.com/maxmarinich/vanilla-swipe/blob/master/src/index.ts" id="code">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n            <title>Code Sample</title>\n            <path fill="cadetblue"\n              d="M16.61 11.11v5.72a1.77 1.77 0 0 1-1.54 1.69h-4a1.43 1.43 0 0 1-1.31-1.22 1.09 1.09 0 0 1 0-.18 1.37 1.37 0 0 1 1.37-1.36h1.74a1 1 0 0 0 1-1v-3.62a1.4 1.4 0 0 1 1.18-1.39h.17a1.37 1.37 0 0 1 1.39 1.36zm-6.46 1.74V9.26a1 1 0 0 1 1-1H13a1.37 1.37 0 0 0 1.37-1.37 1 1 0 0 0 0-.17 1.45 1.45 0 0 0-1.41-1.2H9a1.81 1.81 0 0 0-1.58 1.66v5.7a1.37 1.37 0 0 0 1.37 1.37H9a1.4 1.4 0 0 0 1.15-1.4zm12-4.29V20A4.53 4.53 0 0 1 18 24h-7.58a8.57 8.57 0 0 1-8.56-8.57V4.54A4.54 4.54 0 0 1 6.4 0h7.18a8.56 8.56 0 0 1 8.56 8.56zm-2.74 0a5.83 5.83 0 0 0-5.82-5.82H6.4a1.79 1.79 0 0 0-1.8 1.8v10.89a5.83 5.83 0 0 0 5.82 5.8h7.44a1.79 1.79 0 0 0 1.54-1.48z"\n            /></svg>\n        </a>\n      </div>\n      <h3 id="info">\n        <br />\n        EventType: none<br />\n        Listener: none<br />\n        DeltaX: 0<br />\n        DeltaY: 0<br />\n        AbsX: 0<br />\n        AbsY: 0<br />\n        DirectionX: none<br />\n        DirectionY: none<br />\n        Duration: 0<br />\n        Velocity: 0<br />\n        SwipeDelta: 15px<br />\n        SwipeStarted: false<br />\n      </h3>\n    </div>\n  </body>\n</html>\n'}]);