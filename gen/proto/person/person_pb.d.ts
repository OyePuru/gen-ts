// package: person
// file: proto/person/person.proto

import * as jspb from "google-protobuf";

export class PersonWithId extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAge(): number;
  setAge(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonWithId.AsObject;
  static toObject(includeInstance: boolean, msg: PersonWithId): PersonWithId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PersonWithId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonWithId;
  static deserializeBinaryFromReader(message: PersonWithId, reader: jspb.BinaryReader): PersonWithId;
}

export namespace PersonWithId {
  export type AsObject = {
    id: number,
    name: string,
    age: number,
  }
}

export class PersonData extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAge(): number;
  setAge(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonData.AsObject;
  static toObject(includeInstance: boolean, msg: PersonData): PersonData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PersonData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonData;
  static deserializeBinaryFromReader(message: PersonData, reader: jspb.BinaryReader): PersonData;
}

export namespace PersonData {
  export type AsObject = {
    name: string,
    age: number,
  }
}

export class PersonId extends jspb.Message {
  getPersonid(): number;
  setPersonid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonId.AsObject;
  static toObject(includeInstance: boolean, msg: PersonId): PersonId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PersonId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonId;
  static deserializeBinaryFromReader(message: PersonId, reader: jspb.BinaryReader): PersonId;
}

export namespace PersonId {
  export type AsObject = {
    personid: number,
  }
}

