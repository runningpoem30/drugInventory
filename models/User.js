const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  institute: { type: String, required: true },
  position: { type: String, required: true }, // e.g., 'admin', 'facility'
  level: { type: Number, required: true }, // e.g., 1, 
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
