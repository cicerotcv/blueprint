export interface Blueprint<OutputType> {
  generate(): OutputType;
  transform<TransformedType>(
    transformer: (output: OutputType) => TransformedType
  ): Blueprint<TransformedType>;
}

export type BlueprintValue<Input extends Blueprint<any>> =
  Input extends Blueprint<infer Output> ? Output : never;
