const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  isAdmin: { type: Boolean },
  phoneNumber: { type: Number },
  email: { type: String, unique: true },
});

module.exports = mongoose.model('user', userSchema);

