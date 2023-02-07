import { BlueprintNode } from "../types/node";

import { Transform } from "./transform";

export class BlueprintArray<U extends any> implements BlueprintNode<U[]> {
  protected minLength: number;
  protected maxLength: number;
  protected baseNode: BlueprintNode<U>;

  constructor(
    minLength: number,
    maxLength: number,
    baseNode: BlueprintNode<U>
  ) {
    this.minLength = minLength;
    this.maxLength = maxLength;
    this.baseNode = baseNode;
  }

  compile(): U[] {
    let length = this.minLength;
    if (this.minLength !== this.maxLength) {
      const variation = this.maxLength - this.minLength;
      length += Math.floor(Math.random() * variation);
    }
    return Array.from(Array(length).keys()).map(() => this.baseNode.compile());
  }

  transform<R>(mutator: (v: U[]) => R): BlueprintNode<R> {
    return new Transform(this, mutator);
  }
}
