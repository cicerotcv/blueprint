import { fromBlueprint } from "../modules/array/from-blueprint";
import { GenerateFromBlueprintArray } from "../types/array";
import { blueprintFactory } from "../utils/factory";

export const array: GenerateFromBlueprintArray = (schema) => {
  return {
    generate: () => fromBlueprint(schema),
    transform: (transformer) =>
      blueprintFactory(transformer)(fromBlueprint(schema)),
  };
};
