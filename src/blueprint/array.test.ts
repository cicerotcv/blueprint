import { Blueprint } from "../types/blueprint";
import { array } from "./array";

const mockBlueprint = <T>(value: T) =>
  ({
    generate: jest.fn().mockReturnValue(value),
    transform: jest.fn(),
  } as Blueprint<T>);

describe("array", () => {
  describe("generate", () => {
    it("should generate an array based on the provided schema", () => {
      const recipe = {
        length: 5,
        schema: mockBlueprint("value"),
      };

      const result = array(recipe).generate();

      expect(recipe.schema.generate).toHaveBeenCalledTimes(5);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(5);
      expect(result).toEqual(["value", "value", "value", "value", "value"]);
    });
  });

  describe("transform", () => {
    it("should call the transformer with the generated array", () => {
      const recipe = {
        length: 5,
        schema: mockBlueprint("value"),
      };

      const transformer = jest.fn();

      array(recipe).transform(transformer).generate();

      expect(transformer).toHaveBeenCalledTimes(1);
      expect(transformer).toHaveBeenCalledWith([
        "value",
        "value",
        "value",
        "value",
        "value",
      ]);
    });
  });
});
