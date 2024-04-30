import { Blueprint } from "./blueprint";

export type BlueprintRecipe = (...args: any[]) => any;

export type BlueprintFactory = <Recipe extends BlueprintRecipe>(
  recipe: Recipe
) => (...params: Parameters<Recipe>) => Blueprint<ReturnType<Recipe>>;
