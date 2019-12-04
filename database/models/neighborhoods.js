const mongoose = require('mongoose');

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

module.exports = Neighborhood;
