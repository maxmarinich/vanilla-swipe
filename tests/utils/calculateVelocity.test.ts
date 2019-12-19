import { calculateVelocity } from "../../src/utils";

describe("calculateVelocity", () => {
  it("should return expected data if time passed", () => {
    const data = calculateVelocity(2, 0, 1);

    expect(data).toBe(2);
  });
});
