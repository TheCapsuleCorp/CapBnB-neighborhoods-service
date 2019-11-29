const mongoose = require('mongoose');

const houseRules = new mongoose.Schema({
  smoking: Boolean,
  party: Boolean,
  event: Boolean,
  pet: Boolean,
  mustAlsoAcknowledge: Object,
  additionalRules: String
});

const HouseRules = mongoose.model('HouseRules', houseRules);

module.exports = HouseRules;
