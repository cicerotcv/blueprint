import { NumberParams } from "../../types/number";
import { random } from "./random";

export const between = (
  params: { min: number; max: number } & Pick<NumberParams, "including">
) => {
  const interval = params.max - params.min;

  if (interval === 0) return params.min;

  if (params.including)
    return params.min + Math.floor(random() * (interval + 1));

  return params.min + Math.floor(random() * interval);
};
