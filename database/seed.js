const db = require('./index');
const Neighborhood = require('./models/neighborhoods');
const data = require('./nbmockdata').nbData;
const mongoose = require('mongoose');


db.connect().then(() => {
  return Neighborhood.deleteMany({});
}).then((neighborhoods) => {
  return Neighborhood.insertMany(data);
}).then(() => {
  mongoose.connection.close(() => {
    console.log('Successfully seeded and closed the database connection.');
  });
}).catch((err) => {
  console.log(err);
});
