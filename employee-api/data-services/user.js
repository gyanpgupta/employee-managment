const User = require('../models/user');

exports.getUser = async function (email, isAdmin) {
  return User.findOne({ email, isAdmin });
}

exports.updateUser = async function (payload) {
  return User.updateOne({ email: payload.email }, { ...payload });
}

exports.addEmployee = async function ({ ...payload }) {
  let user = new User({ ...payload, isAdmin: false });
  return user.save();
}

exports.getEmployees = async function () {
  return User.find({ isAdmin: false });
}

exports.findUser = async function (email) {
  return User.findOne({ email });
}