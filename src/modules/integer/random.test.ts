import { random } from "./random";

describe("random", () => {
  it("should return a number between 0 and 1", () => {
    const result = random();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1);
  });

  it("should return different values on multiple invocations", () => {
    const result1 = random();
    const result2 = random();
    expect(result1).not.toBe(result2);
  });
});
