|-- microservice_client_demo
    |-- .gitignore
    |-- README.md
    |-- env
    |-- env.example
    |-- package-lock.json
    |-- package.json
    |-- integration-test
    |   |-- index.js
    |-- src
        |-- index.js
        |-- api
        |   |-- order.js
        |   |-- order.spec.js
        |-- config
        |   |-- config.js
        |   |-- index.di.spec.js
        |   |-- index.js
        |   |-- db
        |   |   |-- index.js
        |   |   |-- mongo.js
        |   |   |-- mongo.spec.js
        |   |-- di
        |       |-- di.js
        |       |-- di.proto.js
        |       |-- index.js
        |-- models
        |   |-- index.js
        |   |-- index.spec.js
        |   |-- order.model.js
        |   |-- user.model.js
        |-- repository
        |   |-- repository.js
        |   |-- repository.spec.js
        |-- server
        |   |-- server.js
        |   |-- server.spec.js
        |-- services
            |-- index.js
            |-- payment.service.js
