import { Blueprint } from "../../types/blueprint";
import { fromBlueprint } from "./from-blueprint";

const getMockedBlueprint = <T extends any>(value: T): Blueprint<T> =>
  ({
    generate: jest.fn().mockReturnValue(value) as () => T,
    transform: () => ({} as Blueprint<any>),
  } as Blueprint<T>);

const numberRecipe = {
  length: 3,
  schema: getMockedBlueprint("value"),
};

const blueprintRecipe = {
  length: getMockedBlueprint(3),
  schema: getMockedBlueprint("value"),
};

describe("fromBlueprint", () => {
  describe("when the recipe length is a number", () => {
    beforeEach(() => {
      (numberRecipe.schema.generate as jest.Mock).mockClear();
    });

    it("should generate an array with the correct number of elements", () => {
      const result = fromBlueprint(numberRecipe);

      expect(result.length).toEqual(3);
    });

    it("should call the generate function the correct number of times", () => {
      fromBlueprint(numberRecipe);

      expect(numberRecipe.schema.generate).toHaveBeenCalledTimes(3);
    });

    it("should generate an array from the blueprint recipe", () => {
      const result = fromBlueprint(numberRecipe);

      expect(result).toEqual<string[]>(["value", "value", "value"]);
    });
  });

  describe("when the recipe length is a blueprint", () => {
    beforeEach(() => {
      (blueprintRecipe.schema.generate as jest.Mock).mockClear();
      (blueprintRecipe.length.generate as jest.Mock).mockClear();
    });

    it("should call the length blueprint generate function", () => {
      fromBlueprint(blueprintRecipe);

      expect(blueprintRecipe.length.generate).toHaveBeenCalledTimes(1);
    });

    it("should call the generate function the correct number of times", () => {
      fromBlueprint(blueprintRecipe);

      expect(blueprintRecipe.schema.generate).toHaveBeenCalledTimes(3);
    });

    it("should generate an array with the correct number of elements", () => {
      const result = fromBlueprint(blueprintRecipe);

      expect(result.length).toEqual(3);
    });

    it("should generate an array from the blueprint recipe", () => {
      const result = fromBlueprint(blueprintRecipe);

      expect(blueprintRecipe.length.generate).toHaveBeenCalledTimes(1);
      expect(result).toEqual<string[]>(["value", "value", "value"]);
    });
  });
});
