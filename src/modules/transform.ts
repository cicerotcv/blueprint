import { BlueprintNode } from "../types/node";

export class Transform<ValueType extends any, ReturnType extends any>
  implements BlueprintNode<ReturnType>
{
  protected node: BlueprintNode<ValueType>;
  protected mutator: (value: ValueType) => ReturnType;

  constructor(
    node: BlueprintNode<ValueType>,
    mutator: (value: ValueType) => ReturnType
  ) {
    this.node = node;
    this.mutator = mutator;
  }

  compile(): ReturnType {
    return this.mutator(this.node.compile());
  }

  transform<R>(mutator: (v: ReturnType) => R): Transform<ReturnType, R> {
    return new Transform(this, mutator);
  }
}
