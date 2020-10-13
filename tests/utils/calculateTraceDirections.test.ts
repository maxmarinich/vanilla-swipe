import { calculateTraceDirections } from '../../src/lib/utils';

describe('calculateTraceDirections', () => {
  const trace1 = [0, -2, -5, -7, -10, -11];
  const trace2 = [0, 10, 15, 17, 20];
  const trace3 = [1, 2, 3, 4, 5, 4, 3, 4, 5, 6, 7, 8, 4, 6, 8, 1, 0, -1, -2, -3, 0, 4, 6, -3];
  const trace4 = [10, 3, 0, -2, -5, -7, -10, 40, 0];

  it('should return default data', () => {
    const data = calculateTraceDirections();
    expect(data).toStrictEqual([]);
  });

  it('should return expected data if single negative', () => {
    const data = calculateTraceDirections([-1]);
    expect(data).toStrictEqual([{ NEGATIVE: [-1] }]);
  });

  it('should return expected data if single positive', () => {
    const data = calculateTraceDirections([1]);
    expect(data).toStrictEqual([{ POSITIVE: [1] }]);
  });

  it('should return expected data if empty', () => {
    const data = calculateTraceDirections([]);
    expect(data).toStrictEqual([]);
  });

  it('should return expected data if zero', () => {
    const data = calculateTraceDirections([0]);
    expect(data).toStrictEqual([{ NONE: [0] }]);
  });

  it('should return expected data in case 1', () => {
    const data = calculateTraceDirections(trace1);
    expect(data).toStrictEqual([{ NEGATIVE: [0, -2, -5, -7, -10, -11] }]);
  });

  it('should return expected data in case 2', () => {
    const data = calculateTraceDirections(trace2);
    expect(data).toStrictEqual([{ POSITIVE: [0, 10, 15, 17, 20] }]);
  });

  it('should return expected data in case 3', () => {
    const data = calculateTraceDirections(trace3);
    expect(data).toStrictEqual([
      { POSITIVE: [1, 2, 3, 4, 5] },
      { NEGATIVE: [4, 3] },
      { POSITIVE: [4, 5, 6, 7, 8] },
      { NEGATIVE: [4] },
      { POSITIVE: [6, 8] },
      { NEGATIVE: [1, 0, -1, -2, -3] },
      { POSITIVE: [0, 4, 6] },
      { NEGATIVE: [-3] },
    ]);
  });

  it('should return expected data in case 4', () => {
    const data = calculateTraceDirections(trace4);
    expect(data).toStrictEqual([
      { POSITIVE: [10] },
      { NEGATIVE: [3, 0, -2, -5, -7, -10] },
      { POSITIVE: [40] },
      { NEGATIVE: [0] },
    ]);
  });

  it('should return expected data in case 5', () => {
    const data = calculateTraceDirections([...trace1, ...trace2, ...trace3, ...trace4]);

    expect(data).toStrictEqual([
      { NEGATIVE: [0, -2, -5, -7, -10, -11] },
      { POSITIVE: [0, 10, 15, 17, 20] },
      { NEGATIVE: [1] },
      { POSITIVE: [2, 3, 4, 5] },
      { NEGATIVE: [4, 3] },
      { POSITIVE: [4, 5, 6, 7, 8] },
      { NEGATIVE: [4] },
      { POSITIVE: [6, 8] },
      { NEGATIVE: [1, 0, -1, -2, -3] },
      { POSITIVE: [0, 4, 6] },
      { NEGATIVE: [-3] },
      { POSITIVE: [10] },
      { NEGATIVE: [3, 0, -2, -5, -7, -10] },
      { POSITIVE: [40] },
      { NEGATIVE: [0] },
    ]);
  });
});
