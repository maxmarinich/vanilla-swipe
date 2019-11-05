import { createOptions } from './createOptions';

export function checkIsPassiveSupported(isPassiveSupported = false) {
  let proxy = { isPassiveSupported };

  try {
    const options = createOptions(proxy);

    window.addEventListener('checkIsPassiveSupported', console.log, options);
    window.removeEventListener('checkIsPassiveSupported', console.log, options);
  } catch (err) {}

  return proxy.isPassiveSupported;
}
