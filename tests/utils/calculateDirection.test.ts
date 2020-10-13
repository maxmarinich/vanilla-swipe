import { calculateDirection } from '../../src/lib/utils';

describe('calculateDirection', () => {
  it('should return expected data if no trace', () => {
    const data = calculateDirection([0]);
    expect(data).toBe('NONE');
  });

  it('should return expected data if no zero trace', () => {
    const data = calculateDirection([0, 0]);
    expect(data).toBe('NONE');
  });

  it('should return expected data if trace x equal single positive', () => {
    const data = calculateDirection([1]);
    expect(data).toBe('POSITIVE');
  });

  it('should return expected data if trace x equal multi positive', () => {
    const data = calculateDirection([1, 5]);
    expect(data).toBe('POSITIVE');
  });

  it('should return expected data if trace x equal multi', () => {
    const data = calculateDirection([1, -2]);
    expect(data).toBe('NEGATIVE');
  });

  it('should return expected data if trace x equal positive', () => {
    const data = calculateDirection([1, 1, 1]);
    expect(data).toBe('NEGATIVE');
  });

  it('should return expected data if trace y equal multi', () => {
    const data = calculateDirection([1, -2]);
    expect(data).toBe('NEGATIVE');
  });

  it('should return expected data if trace y equal multi positive', () => {
    const data = calculateDirection([1, 2]);
    expect(data).toBe('POSITIVE');
  });

  it('should return expected data if trace y equal positive', () => {
    const data = calculateDirection([1, 1, 1]);
    expect(data).toBe('NEGATIVE');
  });

  it('should return expected data if current y trace equal zero', () => {
    const data = calculateDirection([1, 1, 0]);
    expect(data).toBe('NEGATIVE');
  });

  it('should return expected data if current x trace equal zero', () => {
    const data = calculateDirection([1, 1, 0]);
    expect(data).toBe('NEGATIVE');
  });
});
