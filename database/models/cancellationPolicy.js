const mongoose = require('mongoose');

const cancellationPolicy = new mongoose.Schema({
  freeCancellation: Boolean,
  firstRefund: String,
  secondRefund: String,
  firstTimeLimit: String,
  secondTimeLimit: String

});

const CancellationPolicy = mongoose.model('CancellationPolicy', cancellationPolicy);

module.exports = CancellationPolicy;
