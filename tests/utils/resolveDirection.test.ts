import {resolveDirection} from '../../src/lib/utils';
import {Axis} from '../../src/lib/types';

describe('resolveDirection', () => {
  it('should return expected data if no trace', () => {
    const data = resolveDirection([0]);
    expect(data).toBe('NONE');
  });

  it('should return expected data if case 1', () => {
    const data = resolveDirection([0], Axis.X);
    expect(data).toBe('NONE');
  });

  it('should return expected data if case 2', () => {
    const data = resolveDirection([0], Axis.X, 10);
    expect(data).toBe('NONE');
  });

  it('should return expected data if case 3', () => {
    const data = resolveDirection([0,5,10,15, 2], Axis.X, 10);
    expect(data).toBe('LEFT');
  });

  it('should return expected data if case 4', () => {
    const data = resolveDirection([0,5,10,15, 7, 8, 4], Axis.X, 10);
    expect(data).toBe('RIGHT');
  });

  it('should return expected data if case 3', () => {
    const data = resolveDirection([0,5,10,15, 2], Axis.Y, 10);
    expect(data).toBe('BOTTOM');
  });

  it('should return expected data if case 4', () => {
    const data = resolveDirection([0,5,10,15, 7, 8, 4], Axis.Y, 10);
    expect(data).toBe('TOP');
  });
});
