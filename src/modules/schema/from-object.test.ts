import { fromObject } from "./from-object";

const getBlueprint = <T>(value: T) => ({
  generate: jest.fn().mockReturnValue(value) as () => T,
  transform: () => ({} as any),
});

const schema = {
  age: getBlueprint(25),
  height: getBlueprint(6),
};

describe("fromObject", () => {
  beforeEach(() => {
    (schema.age.generate as jest.Mock).mockClear();
    (schema.height.generate as jest.Mock).mockClear();
  });

  it("should contain the same keys as the schema", () => {
    const result = fromObject(schema);

    expect(Object.keys(result)).toEqual(Object.keys(schema));
  });

  it("should call the generate function for each key in the schema", () => {
    fromObject(schema);

    expect(schema.age.generate).toHaveBeenCalledTimes(1);
    expect(schema.height.generate).toHaveBeenCalledTimes(1);
  });

  it("should return an object with the correct values", () => {
    const result = fromObject(schema);

    expect(result).toEqual({
      age: 25,
      height: 6,
    });
  });
});
