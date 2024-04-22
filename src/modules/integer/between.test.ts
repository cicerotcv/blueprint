import { between } from "./between";

describe("between", () => {
  it("should return a number between the given range excluding the threshold", () => {
    for (let i = 0; i < 100; i++) {
      const min = 3;
      const max = 7;

      const result = between({ min, max, including: false });

      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });

  it("should return a number between the given range including the threshold", () => {
    for (let i = 0; i < 100; i++) {
      const min = 3;
      const max = 7;

      const result = between({ min, max, including: true });

      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });

  it("should return the min/max value when they are equal", () => {
    for (let i = 0; i < 100; i++) {
      const min = 0;
      const max = 0;

      const result = between({ min, max, including: true });

      expect(result).toBe(min);
    }
  });
});
