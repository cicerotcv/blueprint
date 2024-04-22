import { DEFAULT_INTERVAL } from "../../config/number";
import { NumberParams } from "../../types/number";
import { between } from "./between";

export const lessThan = (
  value: number,
  params?: Pick<NumberParams, "interval">
) => {
  const interval = params?.interval ?? DEFAULT_INTERVAL;

  return between({ min: value - interval - 1, max: value, including: false });
};
