import { BlueprintNode } from "../types/node";
import { Transform } from "./transform";

const blueprintNodeFromFakerMethod = <Method extends (...params: any) => any>(
  method: Method
): (() => BlueprintNode<ReturnType<Method>>) => {
  class FakeWrapper implements BlueprintNode<ReturnType<Method>> {
    protected params: Parameters<Method>[];

    constructor(...params: Parameters<typeof method>) {
      this.params = params;
    }

    compile(): ReturnType<Method> {
      return method(...this.params);
    }

    transform<RetType>(
      mutator: (v: ReturnType<Method>) => RetType
    ): BlueprintNode<RetType> {
      return new Transform(this, mutator);
    }
  }

  return (...params: Parameters<typeof method>) => new FakeWrapper(...params);
};

export function BlueprintNodesFromModule<FakerModule extends Record<any, any>>(
  module: FakerModule
): {
  [methodName in keyof FakerModule]: (
    ...parameters: Parameters<FakerModule[methodName]>
  ) => BlueprintNode<ReturnType<FakerModule[methodName]>>;
} {
  const entries = Object.entries(module);
  const methods = entries.map(([methodName, methodHandler]) => [
    methodName,
    blueprintNodeFromFakerMethod(methodHandler),
  ]);
  return Object.fromEntries(methods);
}
