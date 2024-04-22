import { blueprintFactory } from "../../utils/factory";
import { fromObject } from "./from-object";

describe("fromObject", () => {
  it("should generate the evaluated object schema", () => {
    // Define the object schema
    const objectSchema = {
      name: blueprintFactory(() => "John")(),
      age: blueprintFactory(() => 25)(),
      email: blueprintFactory(() => "john@example.com")(),
    };

    // Call the fromObject function
    const evaluated = fromObject(objectSchema);

    // Assert the generated values
    expect(evaluated).toEqual({
      name: "John",
      age: 25,
      email: "john@example.com",
    });
  });
});
