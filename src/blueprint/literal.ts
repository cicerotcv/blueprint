import { Blueprint } from "../types/blueprint";
import { blueprintFactory } from "../utils/factory";

export const literal = <T>(value: T): Blueprint<T> => ({
  generate: () => value,
  transform: (transformer) => blueprintFactory(transformer)(value),
});
