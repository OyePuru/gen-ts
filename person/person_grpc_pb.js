// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_person_person_pb = require('../../proto/person/person_pb.js');

function serialize_person_PersonData(arg) {
  if (!(arg instanceof proto_person_person_pb.PersonData)) {
    throw new Error('Expected argument of type person.PersonData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_person_PersonData(buffer_arg) {
  return proto_person_person_pb.PersonData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_person_PersonId(arg) {
  if (!(arg instanceof proto_person_person_pb.PersonId)) {
    throw new Error('Expected argument of type person.PersonId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_person_PersonId(buffer_arg) {
  return proto_person_person_pb.PersonId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_person_PersonWithId(arg) {
  if (!(arg instanceof proto_person_person_pb.PersonWithId)) {
    throw new Error('Expected argument of type person.PersonWithId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_person_PersonWithId(buffer_arg) {
  return proto_person_person_pb.PersonWithId.deserializeBinary(new Uint8Array(buffer_arg));
}


var PersonServiceService = exports.PersonServiceService = {
  personGetHandler: {
    path: '/person.PersonService/PersonGetHandler',
    requestStream: false,
    responseStream: false,
    requestType: proto_person_person_pb.PersonData,
    responseType: proto_person_person_pb.PersonWithId,
    requestSerialize: serialize_person_PersonData,
    requestDeserialize: deserialize_person_PersonData,
    responseSerialize: serialize_person_PersonWithId,
    responseDeserialize: deserialize_person_PersonWithId,
  },
  personCreateHandler: {
    path: '/person.PersonService/PersonCreateHandler',
    requestStream: false,
    responseStream: false,
    requestType: proto_person_person_pb.PersonData,
    responseType: proto_person_person_pb.PersonWithId,
    requestSerialize: serialize_person_PersonData,
    requestDeserialize: deserialize_person_PersonData,
    responseSerialize: serialize_person_PersonWithId,
    responseDeserialize: deserialize_person_PersonWithId,
  },
  personGetByIdHandler: {
    path: '/person.PersonService/PersonGetByIdHandler',
    requestStream: false,
    responseStream: false,
    requestType: proto_person_person_pb.PersonId,
    responseType: proto_person_person_pb.PersonWithId,
    requestSerialize: serialize_person_PersonId,
    requestDeserialize: deserialize_person_PersonId,
    responseSerialize: serialize_person_PersonWithId,
    responseDeserialize: deserialize_person_PersonWithId,
  },
};

exports.PersonServiceClient = grpc.makeGenericClientConstructor(PersonServiceService);
