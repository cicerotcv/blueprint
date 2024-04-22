import { blueprintFactory } from "../utils/factory";
import { between } from "../modules/integer/between";
import { greaterThan } from "../modules/integer/greater-than";
import { lessThan } from "../modules/integer/less-than";

export const integer = {
  lessThan: blueprintFactory(lessThan),
  between: blueprintFactory(between),
  greaterThan: blueprintFactory(greaterThan),
};
