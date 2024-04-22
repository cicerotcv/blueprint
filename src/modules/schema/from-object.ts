import { Blueprint } from "../../types/blueprint";
import { GeneratedSchema } from "../../types/schema";

export const fromObject = <O extends { [key: string]: Blueprint<any> }>(
  objectSchema: O
) => {
  const evaluated = {} as any;

  Object.entries(objectSchema).forEach(([key, value]) => {
    evaluated[key] = value.generate();
  });

  return evaluated as GeneratedSchema<O>;
};
