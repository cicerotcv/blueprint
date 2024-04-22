import { fromObject } from "../modules/schema/from-object";
import { BlueprintFromSchema } from "../types/schema";
import { blueprintFactory } from "../utils/factory";

export const schema: BlueprintFromSchema = (schema) => {
  return {
    generate: () => fromObject(schema),
    transform: (transformer) =>
      blueprintFactory(transformer)(fromObject(schema)),
  };
};
