import { createOptions } from './createOptions';

export function checkIsPassiveSupported(isPassiveSupported = false) {
  let proxy = { isPassiveSupported };

  try {
    const options = createOptions(proxy);

    window.addEventListener('checkIsPassiveSupported', noop, options);
    window.removeEventListener('checkIsPassiveSupported', noop, options);
  } catch (err) {}

  return proxy.isPassiveSupported;
}

export const noop = () => {};
