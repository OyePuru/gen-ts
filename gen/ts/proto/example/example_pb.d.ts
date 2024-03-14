// package: example
// file: proto/example/example.proto

import * as jspb from "google-protobuf";

export class ExampleGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleGetRequest): ExampleGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExampleGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleGetRequest;
  static deserializeBinaryFromReader(message: ExampleGetRequest, reader: jspb.BinaryReader): ExampleGetRequest;
}

export namespace ExampleGetRequest {
  export type AsObject = {
  }
}

export class ExampleGetResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleGetResponse): ExampleGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExampleGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleGetResponse;
  static deserializeBinaryFromReader(message: ExampleGetResponse, reader: jspb.BinaryReader): ExampleGetResponse;
}

export namespace ExampleGetResponse {
  export type AsObject = {
    message: string,
  }
}

export class ExamplePostRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExamplePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExamplePostRequest): ExamplePostRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExamplePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExamplePostRequest;
  static deserializeBinaryFromReader(message: ExamplePostRequest, reader: jspb.BinaryReader): ExamplePostRequest;
}

export namespace ExamplePostRequest {
  export type AsObject = {
    name: string,
  }
}

export class ExamplePostResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExamplePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExamplePostResponse): ExamplePostResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExamplePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExamplePostResponse;
  static deserializeBinaryFromReader(message: ExamplePostResponse, reader: jspb.BinaryReader): ExamplePostResponse;
}

export namespace ExamplePostResponse {
  export type AsObject = {
    message: string,
  }
}

