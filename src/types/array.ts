import { Blueprint } from "./blueprint";

export type ArrayGeneratorInput<V> = {
  length: number | Blueprint<number>;
  schema: Blueprint<V>;
};

export type ArrayGeneratorOutput<S extends ArrayGeneratorInput<any>> =
  S extends ArrayGeneratorInput<infer T> ? T[] : never;

export type GenerateFromBlueprintArray = <S extends ArrayGeneratorInput<any>>(
  schema: S
) => Blueprint<ArrayGeneratorOutput<S>>;
