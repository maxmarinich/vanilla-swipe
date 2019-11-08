export function getOptions(isPassiveSupported: boolean = false) {
  if (isPassiveSupported) {
    return { passive: false };
  }
  return {};
}
