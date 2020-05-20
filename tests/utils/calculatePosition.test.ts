import { calculatePosition } from "../../src/lib/utils";

describe("calculatePosition", () => {
  it("should return expected data if next position is less", () => {
    const nextPos = { x: -1, y: -1 };
    const state = { x: 1, y: 1, start: 1, traceX: [], traceY: [], isSwiping: false };
    const data = calculatePosition(state, nextPos);

    expect(data.deltaX).toEqual(-2);
    expect(data.deltaY).toEqual(2);
    expect(data.absX).toEqual(2);
    expect(data.absY).toEqual(2);
    expect(data.directionX).toBe('LEFT');
    expect(data.directionY).toBe('TOP');
    expect(data.duration > 0).toBe(true);
  });

  it("should return expected data if next position is greater", () => {
    const nextPos = { x: 101, y: 100 };
    const state = { x: 1, y: 0, start: 1, traceX: [], traceY: [], isSwiping: false };
    const data = calculatePosition(state, nextPos);

    expect(data.deltaX).toEqual(100);
    expect(data.deltaY).toEqual(-100);
    expect(data.absX).toEqual(100);
    expect(data.absY).toEqual(100);
    expect(data.directionX).toBe('RIGHT');
    expect(data.directionY).toBe('BOTTOM');
    expect(data.velocity.toFixed(5)).toBe("0.00000");
  });

  it("should return expected data if next position is equal", () => {
    const nextPos = { x: -100, y: 0 };
    const state = { x: 0, y: 0, start: 0, traceX: [], traceY: [], isSwiping: false };
    const data = calculatePosition(state, nextPos);

    expect(data.deltaX).toEqual(-100);
    expect(data.deltaY).toEqual(0);
    expect(data.absX).toEqual(100);
    expect(data.absY).toEqual(0);
    expect(data.duration).toBe(0);
    expect(data.directionX).toBe('LEFT');
    expect(data.directionY).toBe('NONE');
    expect(data.velocity).toBe(100);
  });
});
