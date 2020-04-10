export function createOptions(proxy = {}) {
  Object.defineProperty(proxy, 'passive', {
    get: function() {
      this.isPassiveSupported = true;
      return true;
    },
    enumerable: true,
  });

  return proxy;
}
