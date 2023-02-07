export type ObjectKey = string | number | symbol;

export type NodeType<BpNode extends BlueprintNode<any>> =
  BpNode extends BlueprintNode<infer Type> ? Type : never;

export interface BlueprintNode<ValueType = any> {
  compile(): ValueType;
  transform<RetType>(
    mutator: (v: ValueType) => RetType
  ): BlueprintNode<RetType>;
}
