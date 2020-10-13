import { getDirectionValue, getDirectionKey, getDifference } from '../../src/lib/utils';

describe('common', () => {
  it('getDirectionValues: default', () => {
    const data = getDirectionValue();
    expect(data).toBe(0);
  });

  it('getDirectionValues: expected', () => {
    const data = getDirectionValue([1, 2]);
    expect(data).toBe(2);
  });

  it('getDirectionKey: default', () => {
    const data = getDirectionKey();
    expect(data).toBe('NONE');
  });

  it('getDirectionKey: expected', () => {
    const data = getDirectionKey({ name: '' });
    expect(data).toBe('name');
  });

  it('getDifference: default', () => {
    const data = getDifference();
    expect(data).toBe(0);
  });

  it('getDifference: expected', () => {
    const data = getDifference(10, -10);
    expect(data).toBe(20);
  });
});
