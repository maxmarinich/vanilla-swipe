export const getDirectionKey = (object = {}): string => {
  return Object.keys(object).toString() || 'NONE';
};

export const getDirectionValue = (values: number[] = []): number => {
  return values[values.length - 1] || 0;
};

export const getDifference = (x = 0, y = 0) => {
  return Math.abs(x - y);
};
