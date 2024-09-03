const mongoose = require('mongoose');

const drugSchema = new mongoose.Schema({
  name: String,
  batchNumber: String,
  manufacturer: String,
  manufacturingDate: Date,
  expirationDate: Date,
  quantity: Number,
  storageConditions: String,
  price: Number,
  description: String
});

module.exports = mongoose.model('Drug', drugSchema);


