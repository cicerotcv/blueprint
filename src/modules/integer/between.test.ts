import { between } from "./between";
import { random } from "./random";

jest.mock("./random", () => ({
  random: jest.fn(),
}));

describe("between", () => {
  afterAll(() => {
    (random as jest.Mock).mockRestore();
  });

  describe("when random value is 0", () => {
    beforeAll(() => {
      (random as jest.Mock).mockReturnValue(0);
    });

    afterEach(() => {
      (random as jest.Mock).mockClear();
    });

    it("should call the random function", () => {
      between({ min: 5, max: 10 });

      expect(random).toHaveBeenCalledTimes(1);
    });

    it("should return the min value", () => {
      const result = between({ min: 5, max: 10 });
      expect(result).toEqual(5);
    });
  });

  describe("when random value is almost 1", () => {
    beforeAll(() => {
      (random as jest.Mock).mockReturnValue(1 - Number.EPSILON);
    });

    afterEach(() => {
      (random as jest.Mock).mockClear();
    });

    it("should call the random function", () => {
      between({ min: 5, max: 10 });

      expect(random).toHaveBeenCalledTimes(1);
    });

    it("should return (max - 1)", () => {
      const result = between({ min: 5, max: 10 });
      expect(result).toEqual(9);
    });
  });

  describe("when random value is 0.5", () => {
    beforeAll(() => {
      (random as jest.Mock).mockReturnValue(0.5);
    });

    afterEach(() => {
      (random as jest.Mock).mockClear();
    });

    it("should call the random function", () => {
      between({ min: 5, max: 10 });

      expect(random).toHaveBeenCalledTimes(1);
    });

    it("should return a value between min and max", () => {
      const result = between({ min: 5, max: 10 });
      expect(result).toBeGreaterThanOrEqual(5);
      expect(result).toBeLessThan(10);
    });
  });
});
