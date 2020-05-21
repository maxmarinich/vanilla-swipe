import { calculateDirection } from "../../src/lib/utils";

describe("calculateDirection", () => {
  it("should return expected data if no trace", () => {
    const data = calculateDirection([0], 'x');
    expect(data).toBe('NONE');
  });

  it("should return expected data if no zero trace", () => {
    const data = calculateDirection([0, 0], 'x');
    expect(data).toBe('NONE');
  });

  it("should return expected data if trace x equal single positive", () => {
    const data = calculateDirection([1], 'x');
    expect(data).toBe('RIGHT');
  });

  it("should return expected data if trace x equal multi positive", () => {
    const data = calculateDirection([1, 5], 'x');
    expect(data).toBe('RIGHT');
  });

  it("should return expected data if trace x equal multi", () => {
    const data = calculateDirection([1, -2], 'x');
    expect(data).toBe('LEFT');
  });

  it("should return expected data if trace x equal positive", () => {
    const data = calculateDirection([1, 1, 1], 'x');
    expect(data).toBe('LEFT');
  });

  it("should return expected data if trace y equal multi", () => {
    const data = calculateDirection([1, -2], 'y');
    expect(data).toBe('BOTTOM');
  });

  it("should return expected data if trace y equal multi positive", () => {
    const data = calculateDirection([1, 2], 'y');
    expect(data).toBe('TOP');
  });

  it("should return expected data if trace y equal positive", () => {
    const data = calculateDirection([1, 1, 1], 'y');
    expect(data).toBe('BOTTOM');
  });

  it("should return expected data if current y trace equal zero", () => {
    const data = calculateDirection([1, 1, 0], 'y');
    expect(data).toBe('BOTTOM');
  });

  it("should return expected data if current x trace equal zero", () => {
    const data = calculateDirection([1, 1, 0], 'x');
    expect(data).toBe('LEFT');
  });
});
