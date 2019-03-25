const MongoClient = require('mongodb')
// const MongoClient = require('mongodb').MongoClient

const getMongoURL = (options) => {
  const url = options.servers
    .reduce((prev, cur) => prev + cur + ',', 'mongodb://')

  return `${url.substr(0, url.length - 1)}/${options.db}`
}

const connect = (options, mediator) => {
  mediator.once('boot.ready', () => {
    // const url = 'mongodb://localhost:27017/payment';
  // Use connect method to connect to the Server
    // MongoClient.connect(url, function (err, db) {
    //   console.log("Connected correctly to server");

    //   db.close();
    // });
    MongoClient.connect(
      getMongoURL(options), {
        db: options.dbParameters(),
        server: options.serverParameters()
        // ,
        // replset: options.replsetParameters(options.repl)
      }, (err, db) => {
        if (err) {
          mediator.emit('db.error', err)
        }
        mediator.emit('db.ready', db)
        // db.admin().authenticate(options.user, options.pass, (err, result) => {
        //   if (err) {
        //     mediator.emit('db.error', err)
        //   }
        //   mediator.emit('db.ready', db)
        // })
      })
  })
}

module.exports = Object.assign({}, { connect })
