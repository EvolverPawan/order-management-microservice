# Order Service

The service manages the state of orders. Major funcitonality includes 
- Create Order
- Cancel Order
- Check Order status

                            Order Created
                                | 
                --------------- | ---------------
                |                                 |
            Order Confirmed -------------- Order Cancelled
                | 
            Order Delivered

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```
[ '|-- microservice_client_demo',
  '    |-- .gitignore',
  '    |-- README.md',
  '    |-- env',
  '    |-- env.example',
  '    |-- package-lock.json',
  '    |-- package.json',
  '    |-- integration-test',
  '    |   |-- index.js',
  '    |-- src',
  '        |-- index.js',
  '        |-- api',
  '        |   |-- order.js',
  '        |   |-- order.spec.js',
  '        |-- config',
  '        |   |-- config.js',
  '        |   |-- index.di.spec.js',
  '        |   |-- index.js',
  '        |   |-- db',
  '        |   |   |-- index.js',
  '        |   |   |-- mongo.js',
  '        |   |   |-- mongo.spec.js',
  '        |   |-- di',
  '        |       |-- di.js',
  '        |       |-- di.proto.js',
  '        |       |-- index.js',
  '        |-- models',
  '        |   |-- index.js',
  '        |   |-- index.spec.js',
  '        |   |-- order.model.js',
  '        |   |-- user.model.js',
  '        |-- repository',
  '        |   |-- repository.js',
  '        |   |-- repository.spec.js',
  '        |-- server',
  '        |   |-- server.js',
  '        |   |-- server.spec.js',
  '        |-- services',
  '            |-- index.js',
  '            |-- payment.service.js',
  '' ]
{
  "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service": {
    "depth": 6,
    "parentFolder": null,
    "path": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service",
    "name": "order-service",
    "folders": [
      "integration-test",
      "node_modules",
      "src"
    ],
    "files": [
      ".gitignore",
      "README.md",
      "env",
      "env.example",
      "package-lock.json",
      "package.json"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  },
  "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/integration-test": {
    "depth": 7,
    "parentFolder": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service",
    "path": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/integration-test",
    "name": "integration-test",
    "folders": [],
    "files": [
      "index.js"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  },
  "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src": {
    "depth": 7,
    "parentFolder": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service",
    "path": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src",
    "name": "src",
    "folders": [
      "api",
      "config",
      "models",
      "repository",
      "server",
      "services"
    ],
    "files": [
      "index.js"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  },
  "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/api": {
    "depth": 8,
    "parentFolder": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src",
    "path": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/api",
    "name": "api",
    "folders": [],
    "files": [
      "order.js",
      "order.spec.js"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  },
  "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/config": {
    "depth": 8,
    "parentFolder": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src",
    "path": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/config",
    "name": "config",
    "folders": [
      "db",
      "di"
    ],
    "files": [
      "config.js",
      "index.di.spec.js",
      "index.js"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  },
  "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/models": {
    "depth": 8,
    "parentFolder": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src",
    "path": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/models",
    "name": "models",
    "folders": [],
    "files": [
      "index.js",
      "index.spec.js",
      "order.model.js",
      "user.model.js"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  },
  "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/repository": {
    "depth": 8,
    "parentFolder": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src",
    "path": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/repository",
    "name": "repository",
    "folders": [],
    "files": [
      "repository.js",
      "repository.spec.js"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  },
  "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/server": {
    "depth": 8,
    "parentFolder": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src",
    "path": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/server",
    "name": "server",
    "folders": [],
    "files": [
      "server.js",
      "server.spec.js"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  },
  "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/services": {
    "depth": 8,
    "parentFolder": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src",
    "path": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/services",
    "name": "services",
    "folders": [],
    "files": [
      "index.js",
      "payment.service.js"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  },
  "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/config/db": {
    "depth": 9,
    "parentFolder": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/config",
    "path": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/config/db",
    "name": "db",
    "folders": [],
    "files": [
      "index.js",
      "mongo.js",
      "mongo.spec.js"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  },
  "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/config/di": {
    "depth": 9,
    "parentFolder": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/config",
    "path": "/Users/Mac/Desktop/Rethink-2019/microservice_client_demo/order-service/src/config/di",
    "name": "di",
    "folders": [],
    "files": [
      "di.js",
      "di.proto.js",
      "index.js"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  }
}
