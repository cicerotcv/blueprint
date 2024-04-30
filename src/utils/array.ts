import { Blueprint } from "../types/blueprint";

export const getLength = (length: number | Blueprint<number>) => {
  return typeof length === "number" ? length : length.generate();
};

export const validateLength = (length: number) => {
  if (!Number.isInteger(length)) throw new Error("Length must be an integer");

  if (length < 0) throw new Error("Length must be a positive number");
};
