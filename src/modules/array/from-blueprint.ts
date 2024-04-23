import { ArrayGeneratorInput, ArrayGeneratorOutput } from "../../types/array";
import { getLength, validateLength } from "../../utils/array";

export const fromBlueprint = <R extends ArrayGeneratorInput<any>>(recipe: R) => {
  const length = getLength(recipe.length);

  validateLength(length);

  return Array.from({ length }, () =>
    recipe.schema.generate()
  ) as ArrayGeneratorOutput<R>;
};
