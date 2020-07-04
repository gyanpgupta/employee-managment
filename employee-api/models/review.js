const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const reviewSchema = new mongoose.Schema({
  userId: { type: ObjectId },
  reviewerName: {type: String},
  rating: { type: Number },
  description: {type: String},
});

module.exports = mongoose.model('review', reviewSchema);