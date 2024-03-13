// GENERATED CODE -- DO NOT EDIT!

// package: example
// file: proto/example/example.proto

import * as proto_example_example_pb from "../../proto/example/example_pb";
import * as grpc from "grpc";

interface IExampleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  exampleGetHandler: grpc.MethodDefinition<proto_example_example_pb.ExampleGetRequest, proto_example_example_pb.ExampleGetResponse>;
  examplePostHandler: grpc.MethodDefinition<proto_example_example_pb.ExamplePostRequest, proto_example_example_pb.ExamplePostResponse>;
}

export const ExampleServiceService: IExampleServiceService;

export interface IExampleServiceServer extends grpc.UntypedServiceImplementation {
  exampleGetHandler: grpc.handleUnaryCall<proto_example_example_pb.ExampleGetRequest, proto_example_example_pb.ExampleGetResponse>;
  examplePostHandler: grpc.handleUnaryCall<proto_example_example_pb.ExamplePostRequest, proto_example_example_pb.ExamplePostResponse>;
}

export class ExampleServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  exampleGetHandler(argument: proto_example_example_pb.ExampleGetRequest, callback: grpc.requestCallback<proto_example_example_pb.ExampleGetResponse>): grpc.ClientUnaryCall;
  exampleGetHandler(argument: proto_example_example_pb.ExampleGetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_example_example_pb.ExampleGetResponse>): grpc.ClientUnaryCall;
  exampleGetHandler(argument: proto_example_example_pb.ExampleGetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_example_example_pb.ExampleGetResponse>): grpc.ClientUnaryCall;
  examplePostHandler(argument: proto_example_example_pb.ExamplePostRequest, callback: grpc.requestCallback<proto_example_example_pb.ExamplePostResponse>): grpc.ClientUnaryCall;
  examplePostHandler(argument: proto_example_example_pb.ExamplePostRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_example_example_pb.ExamplePostResponse>): grpc.ClientUnaryCall;
  examplePostHandler(argument: proto_example_example_pb.ExamplePostRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_example_example_pb.ExamplePostResponse>): grpc.ClientUnaryCall;
}
