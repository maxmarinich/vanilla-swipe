import { calculateDuration } from "../../src/utils";

describe("calculateDuration", () => {
  it("should return expected data if no time", () => {
    const data = calculateDuration();
    expect(data).toBe(0);
  });

  it("should return expected data if prev time only", () => {
    const data = calculateDuration(1);
    expect(data).toBe(-1);
  });

  it("should return expected data if all params passed", () => {
    const data = calculateDuration(1, 2);
    expect(data).toBe(1);
  });
});
