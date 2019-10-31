export function checkIsPassiveSupported(isPassiveSupported = false) {
  try {
    const options = Object.defineProperty({}, 'passive', {
      get: function() {
        isPassiveSupported = true;
      },
    });

    window.addEventListener('test', noop, options);
    window.removeEventListener('test', noop, options);
  } catch (err) {}

  return isPassiveSupported;
}

function noop() {}
