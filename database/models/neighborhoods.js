const mongoose = require('mongoose');
const data = require('../nbmockdata').nbData;

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

const Neighborhood = mongoose.model('Neighborhood', neighborhoods);

Neighborhood.insertMany(data, (err) => {
  if (err) {
    console.log(err);
  }
});

module.exports = Neighborhood;
