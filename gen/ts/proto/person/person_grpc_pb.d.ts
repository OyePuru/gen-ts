// GENERATED CODE -- DO NOT EDIT!

// package: person
// file: proto/person/person.proto

import * as proto_person_person_pb from "../../proto/person/person_pb";
import * as grpc from "grpc";

interface IPersonServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  personGetHandler: grpc.MethodDefinition<proto_person_person_pb.PersonData, proto_person_person_pb.PersonWithId>;
  personCreateHandler: grpc.MethodDefinition<proto_person_person_pb.PersonData, proto_person_person_pb.PersonWithId>;
  personGetByIdHandler: grpc.MethodDefinition<proto_person_person_pb.PersonId, proto_person_person_pb.PersonWithId>;
}

export const PersonServiceService: IPersonServiceService;

export interface IPersonServiceServer extends grpc.UntypedServiceImplementation {
  personGetHandler: grpc.handleUnaryCall<proto_person_person_pb.PersonData, proto_person_person_pb.PersonWithId>;
  personCreateHandler: grpc.handleUnaryCall<proto_person_person_pb.PersonData, proto_person_person_pb.PersonWithId>;
  personGetByIdHandler: grpc.handleUnaryCall<proto_person_person_pb.PersonId, proto_person_person_pb.PersonWithId>;
}

export class PersonServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  personGetHandler(argument: proto_person_person_pb.PersonData, callback: grpc.requestCallback<proto_person_person_pb.PersonWithId>): grpc.ClientUnaryCall;
  personGetHandler(argument: proto_person_person_pb.PersonData, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_person_person_pb.PersonWithId>): grpc.ClientUnaryCall;
  personGetHandler(argument: proto_person_person_pb.PersonData, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_person_person_pb.PersonWithId>): grpc.ClientUnaryCall;
  personCreateHandler(argument: proto_person_person_pb.PersonData, callback: grpc.requestCallback<proto_person_person_pb.PersonWithId>): grpc.ClientUnaryCall;
  personCreateHandler(argument: proto_person_person_pb.PersonData, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_person_person_pb.PersonWithId>): grpc.ClientUnaryCall;
  personCreateHandler(argument: proto_person_person_pb.PersonData, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_person_person_pb.PersonWithId>): grpc.ClientUnaryCall;
  personGetByIdHandler(argument: proto_person_person_pb.PersonId, callback: grpc.requestCallback<proto_person_person_pb.PersonWithId>): grpc.ClientUnaryCall;
  personGetByIdHandler(argument: proto_person_person_pb.PersonId, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_person_person_pb.PersonWithId>): grpc.ClientUnaryCall;
  personGetByIdHandler(argument: proto_person_person_pb.PersonId, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_person_person_pb.PersonWithId>): grpc.ClientUnaryCall;
}
