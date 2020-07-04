const Review = require('../models/review');

exports.addReview = async function (payload) {
  let review = new Review(payload);
  return review.save();
}

exports.getReview = async function (userId) {
  return Review.find({userId});
}