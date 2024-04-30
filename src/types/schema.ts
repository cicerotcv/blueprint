import { Blueprint, BlueprintValue } from "./blueprint";

export type GeneratedSchema<Schema extends { [key: string]: Blueprint<any> }> =
  {
    [Key in keyof Schema]: BlueprintValue<Schema[Key]>;
  };

export type BlueprintSchema = { [key: string]: Blueprint<any> };

export type BlueprintFromSchema = <S extends BlueprintSchema>(
  schema: S
) => Blueprint<{
  [K in keyof S]: BlueprintValue<S[K]>;
}>;
