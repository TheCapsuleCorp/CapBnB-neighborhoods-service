const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// make a connection
mongoose.connect('mongodb://localhost/CAPBNB_DB', {useMongoClient: true});

// get reference to database
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('CAPBNB DB connected!');
});

// define Schemas
const neighborhoods = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
  gettingAround: String,
  description: String,
  latitude: Number,
  longitude: Number,
  guidebookId: Number
});

const houseRules = new mongoose.Schema({
  smoking: Boolean,
  party: Boolean,
  event: Boolean,
  pet: Boolean,
  mustAlsoAcknowledge: Object,
  additionalRules: String
});

const cancellationPolicy = new mongoose.Schema({
  freeCancellation: Boolean,
  firstRefund: String,
  secondRefund: String,
  firstTimeLimit: String,
  secondTimeLimit: String

});

const thingsToKeepInMind = new mongoose.Schema({
  checkInTime: String,
  checkOutTime: String,
  altCheck: String

});


// compile schema to model
const Neighborhood = mongoose.model('Neighborhood', neighborhoods);
const HouseRules = mongoose.model('HouseRules', houseRules);
const CancellationPolicy = mongoose.model('CancellationPolicy', cancellationPolicy);
const ThingsToKeepInMind = mongoose.model('ThingsToKeepInMind', thingsToKeepInMind);

Neighborhood.insertMany([
  {
    name: 'Billy Rae Cyrus',
    city: 'Dallas',
    country: 'United States',
    gettingAround: 'I get around',
    description: 'Testing Testing, one two three',
    latitude: 98763789,
    longitude: 1243456,
    guidebookId: 23
  },


], (err) => {
  if (err) {
    console.log(err);
  }
});

module.exports = Neighborhood;
// This function should save a repo or repos to the MongoDB
// let save = (record) => {
//
//   // a document instance
//   let gitRepo = new Repo(record);
//   // save model to database
//   gitRepo.save(function (err, repo) {
//     if (err) return console.error(err);
//     console.log('Hey! it worked :)', repo);
//   });
// };


// module.exports begins as an empty object by default. You can add properties to it
// if you like (like in the first example), or you can overwrite it with a function,
// or some other piece of data (number, string, etc.);
// These are the same!
//
// Examples:

// module.exports.save = save;
// module.exports = { save: save };

// This exports only the save function, not an entire object
// module.exports = save;
