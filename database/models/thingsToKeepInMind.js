const mongoose = require('mongoose');

const thingsToKeepInMind = new mongoose.Schema({
  checkInTime: String,
  checkOutTime: String,
  altCheck: String
});

const ThingsToKeepInMind = mongoose.model('ThingsToKeepInMind', thingsToKeepInMind);

module.export = ThingsToKeepInMind;
