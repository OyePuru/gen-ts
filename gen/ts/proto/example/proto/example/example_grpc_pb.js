// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_example_example_pb = require('../../proto/example/example_pb.js');

function serialize_example_ExampleGetRequest(arg) {
  if (!(arg instanceof proto_example_example_pb.ExampleGetRequest)) {
    throw new Error('Expected argument of type example.ExampleGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_ExampleGetRequest(buffer_arg) {
  return proto_example_example_pb.ExampleGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_ExampleGetResponse(arg) {
  if (!(arg instanceof proto_example_example_pb.ExampleGetResponse)) {
    throw new Error('Expected argument of type example.ExampleGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_ExampleGetResponse(buffer_arg) {
  return proto_example_example_pb.ExampleGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_ExamplePostRequest(arg) {
  if (!(arg instanceof proto_example_example_pb.ExamplePostRequest)) {
    throw new Error('Expected argument of type example.ExamplePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_ExamplePostRequest(buffer_arg) {
  return proto_example_example_pb.ExamplePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_ExamplePostResponse(arg) {
  if (!(arg instanceof proto_example_example_pb.ExamplePostResponse)) {
    throw new Error('Expected argument of type example.ExamplePostResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_ExamplePostResponse(buffer_arg) {
  return proto_example_example_pb.ExamplePostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExampleServiceService = exports.ExampleServiceService = {
  exampleGetHandler: {
    path: '/example.ExampleService/ExampleGetHandler',
    requestStream: false,
    responseStream: false,
    requestType: proto_example_example_pb.ExampleGetRequest,
    responseType: proto_example_example_pb.ExampleGetResponse,
    requestSerialize: serialize_example_ExampleGetRequest,
    requestDeserialize: deserialize_example_ExampleGetRequest,
    responseSerialize: serialize_example_ExampleGetResponse,
    responseDeserialize: deserialize_example_ExampleGetResponse,
  },
  examplePostHandler: {
    path: '/example.ExampleService/ExamplePostHandler',
    requestStream: false,
    responseStream: false,
    requestType: proto_example_example_pb.ExamplePostRequest,
    responseType: proto_example_example_pb.ExamplePostResponse,
    requestSerialize: serialize_example_ExamplePostRequest,
    requestDeserialize: deserialize_example_ExamplePostRequest,
    responseSerialize: serialize_example_ExamplePostResponse,
    responseDeserialize: deserialize_example_ExamplePostResponse,
  },
};

exports.ExampleServiceClient = grpc.makeGenericClientConstructor(ExampleServiceService);
