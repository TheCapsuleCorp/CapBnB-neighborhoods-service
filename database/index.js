const mongoose = require('mongoose');
const data = require('./nbmockdata').nbData;
const Neighborhood = require('./models/neighborhoods');
const db = mongoose.connection;

const connect = () => {
  const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/CapBnB-neighborhoods-service';

  return mongoose.connect(dbURI).then(() => {

    // If connection throws an error:
    db.on('error', (err) => {
      console.log(`Mongoose connection error: ${err}`);
    });

    // Once the connection is open:
    db.once('open', () => {
      console.log('Mongoose connected successfully');
    });

    // When connection is disconnected:
    db.on('disconnected', () => {
      console.log('Mongoose connection disconnected');
    });

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log('Mongoose connection disconnected due to app termination');
        process.exit(0);
      });
    });

    // Return the DB connection
    return db;
  }).catch((err) => {
    console.log(err);
  });
};

module.exports.connect = connect;

connect();

Neighborhood.insertMany(data, (err) => {
  if (err) {
    console.log(err);
  }
});

db.close;
