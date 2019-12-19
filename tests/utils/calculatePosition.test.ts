import { calculatePosition } from "../../src/utils";

const prevPos = { x: 1, y: 1, start: 1 };

describe("calculatePosition", () => {
  it("should return expected data if next position is less", () => {
    const nextPos = { x: -1, y: -1 };
    const data = calculatePosition(prevPos, nextPos);

    expect(data.deltaX).toEqual(2);
    expect(data.deltaY).toEqual(2);
    expect(data.absX).toEqual(2);
    expect(data.absY).toEqual(2);
    expect(data.duration > 0).toBe(true);
  });

  it("should return expected data if next position is greater", () => {
    const result = 8.969;
    const nextPos = { x: 2, y: 2 };
    const data = calculatePosition(prevPos, nextPos);

    expect(data.deltaX).toEqual(-1);
    expect(data.deltaY).toEqual(-1);
    expect(data.absX).toEqual(1);
    expect(data.absY).toEqual(1);
    expect(data.velocity).toBe(result);
  });

  it("should return expected data if next position is equal", () => {
    const prevPos = { x: 1, y: 1, start: 0 };
    const nextPos = { x: 1, y: 1 };
    const data = calculatePosition(prevPos, nextPos);

    expect(data.deltaX).toEqual(0);
    expect(data.deltaY).toEqual(0);
    expect(data.absX).toEqual(0);
    expect(data.absY).toEqual(0);
    expect(data.duration).toBe(0);
    expect(data.velocity).toBe(0);
  });
});
