import { calculateDirectionDelta } from '../../src/lib/utils';

describe('calculateDirectionDelta', () => {
  const trace0 = [0];
  const trace1 = [0, -2, -5];
  const trace2 = [0, 20];
  const trace3 = [19];
  const trace4 = [20];
  const trace5 = [15];

  it('should return expected data if empty', () => {
    const data = calculateDirectionDelta([]);
    expect(data).toBe('NONE');
  });

  it('should return expected data if single trace', () => {
    const data = calculateDirectionDelta([{ NONE: [0] }], 0);
    expect(data).toBe('NONE');
  });

  it('should return expected data in case 1', () => {
    const data = calculateDirectionDelta([{ NEGATIVE: trace1 }], 5);
    expect(data).toBe('NEGATIVE');
  });

  it('should return expected data in case 2', () => {
    const data = calculateDirectionDelta([{ NEGATIVE: trace1 }], 10);
    expect(data).toBe('NONE');
  });

  it('should return expected data in case 3', () => {
    const data = calculateDirectionDelta([{ NEGATIVE: trace1 }], 10);
    expect(data).toBe('NONE');
  });

  it('should return expected data in case 4', () => {
    const data = calculateDirectionDelta([{ POSITIVE: trace0 }, { NEGATIVE: trace1 }], 10);
    expect(data).toBe('NONE');
  });

  it('should return expected data in case 5', () => {
    const data = calculateDirectionDelta([{ NEGATIVE: trace1 }, { POSITIVE: trace2 }], 10);
    expect(data).toBe('POSITIVE');
  });

  it('should return expected data in case 6', () => {
    const data = calculateDirectionDelta([{ NONE: trace0 }, { NEGATIVE: trace1 }, { POSITIVE: trace2 }], 10);
    expect(data).toBe('POSITIVE');
  });

  it('should return expected data in case 7', () => {
    const data = calculateDirectionDelta(
      [{ NONE: trace0 }, { NEGATIVE: trace1 }, { POSITIVE: trace2 }, { NEGATIVE: trace3 }],
      10,
    );
    expect(data).toBe('POSITIVE');
  });

  it('should return expected data in case 7', () => {
    const data = calculateDirectionDelta(
      [
        { NONE: trace0 },
        { NEGATIVE: trace1 },
        { POSITIVE: trace2 },
        { NEGATIVE: trace3 },
        { NEGATIVE: trace4 },
        { NEGATIVE: trace5 },
      ],
      10,
    );
    expect(data).toBe('POSITIVE');
  });
});
