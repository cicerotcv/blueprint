import { lessThan } from "./less-than";
import { random } from "./random";

jest.mock("./random", () => ({
  random: jest.fn(),
}));

describe("lessThan", () => {
  describe("when random value is 0", () => {
    beforeAll(() => {
      (random as jest.Mock).mockReturnValue(0);
    });

    it("should return the min value", () => {
      const result = lessThan(11, { interval: 10 });
      expect(result).toEqual(0);
    });
  });

  describe("when random value is almost 1", () => {
    beforeAll(() => {
      (random as jest.Mock).mockReturnValue(1 - Number.EPSILON);
    });

    it("should return the max value", () => {
      const result = lessThan(10, { interval: 10 });
      expect(result).toEqual(9);
    });
  });
});
