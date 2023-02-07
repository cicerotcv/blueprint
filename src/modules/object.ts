import { BlueprintNode, NodeType, ObjectKey } from "../types/node";
import { Transform } from "./transform";

type ObjectType<Schema extends { [key: ObjectKey]: BlueprintNode<any> }> = {
  [key in keyof Schema]: Schema[key] extends BlueprintNode<infer Type>
    ? Type
    : never;
};

export class BlueprintObject<
  BlueprintSchema extends { [key: ObjectKey]: BlueprintNode<any> }
> implements
    BlueprintNode<{
      [key in keyof BlueprintSchema]: NodeType<BlueprintSchema[key]>;
    }>
{
  fields: BlueprintSchema;

  constructor(fields: BlueprintSchema) {
    this.fields = fields;
  }

  compile(): {
    [key in keyof BlueprintSchema]: NodeType<BlueprintSchema[key]>;
  } {
    const entries = Object.entries(this.fields).map(
      ([fieldName, fieldNode]) => [fieldName, fieldNode.compile()]
    );
    const nodes = Object.fromEntries(entries) as ObjectType<BlueprintSchema>;

    return nodes;
  }

  transform<RetType>(
    mutator: (v: ObjectType<BlueprintSchema>) => RetType
  ): BlueprintNode<RetType> {
    return new Transform(this, mutator);
  }
}
