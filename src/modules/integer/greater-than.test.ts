import { greaterThan } from "./greater-than";
import { random } from "./random";

jest.mock("./random", () => ({
  random: jest.fn(),
}));

describe("greaterThan", () => {
  describe("when random value is 0", () => {
    beforeAll(() => {
      (random as jest.Mock).mockReturnValue(0);
    });

    it("should return the min value", () => {
      const result = greaterThan(5, { interval: 10 });
      expect(result).toEqual(6);
    });
  });

  describe("when random value is almost 1", () => {
    beforeAll(() => {
      (random as jest.Mock).mockReturnValue(1 - Number.EPSILON);
    });

    it("should return the max value", () => {
      const result = greaterThan(0, { interval: 10 });
      expect(result).toEqual(10);
    });
  });

  describe("when random value is 0.5", () => {
    beforeAll(() => {
      (random as jest.Mock).mockReturnValue(0.5);
    });

    it("should return a value between min and max", () => {
      const result = greaterThan(0, { interval: 10 });
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    });
  });
});
