import { BlueprintNode, ObjectKey } from "../types/node";
import { BlueprintArray } from "../modules/array";
import { BlueprintObject } from "../modules/object";
import { faker } from "@faker-js/faker";
import { BlueprintNodesFromModule as blueprintNodesFromModule } from "../modules/fake-wrapper";

interface BpArrayConstructor<NodeType> {
  minLength: number;
  maxLength: number;
  schema: BlueprintNode<NodeType>;
}

export class Blueprint {
  static address = blueprintNodesFromModule(faker.address);
  static animal = blueprintNodesFromModule(faker.animal);
  static color = blueprintNodesFromModule(faker.color);
  static comerce = blueprintNodesFromModule(faker.commerce);
  static company = blueprintNodesFromModule(faker.company);
  static datatype = blueprintNodesFromModule(faker.datatype);
  static database = blueprintNodesFromModule(faker.database);
  static date = blueprintNodesFromModule(faker.date);
  static finance = blueprintNodesFromModule(faker.finance);
  static git = blueprintNodesFromModule(faker.git);
  static hacker = blueprintNodesFromModule(faker.hacker);
  static helpers = blueprintNodesFromModule(faker.helpers);
  static image = blueprintNodesFromModule(faker.image);
  static lorem = blueprintNodesFromModule(faker.lorem);
  static internet = blueprintNodesFromModule(faker.internet);
  static music = blueprintNodesFromModule(faker.music);
  static names = blueprintNodesFromModule(faker.name);
  static phone = blueprintNodesFromModule(faker.phone);
  static random = blueprintNodesFromModule(faker.random);
  static science = blueprintNodesFromModule(faker.science);
  static system = blueprintNodesFromModule(faker.system);
  static vehicle = blueprintNodesFromModule(faker.vehicle);
  static word = blueprintNodesFromModule(faker.word);

  static object<K extends ObjectKey, R extends Record<K, BlueprintNode<any>>>(
    obj: R
  ) {
    return new BlueprintObject(obj);
  }

  static array<T>({ minLength, maxLength, schema }: BpArrayConstructor<T>) {
    return new BlueprintArray(minLength, maxLength ?? minLength, schema);
  }
}
