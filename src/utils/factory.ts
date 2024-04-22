import { BlueprintFactory } from "../types/factory";

export const blueprintFactory: BlueprintFactory = (recipe) => {
  return (...params) => ({
    generate: () => recipe(...params),
    transform: (transformer) =>
      blueprintFactory(transformer)(recipe(...params)),
  });
};
