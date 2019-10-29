function checkIsPassiveSupported() {
  let passiveSupported = false;
  try {
    const options = Object.defineProperty({}, 'passive', {
      get: function() {
        passiveSupported = true;
      },
    });

    window.addEventListener('test', noop, options);
    window.removeEventListener('test', noop, options);
  } catch (err) {}

  return passiveSupported;
}

function noop() {}

export { checkIsPassiveSupported };
