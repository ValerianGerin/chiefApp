const user = require("../models/user.model");

exports.findUserPerID = (id) => {
  return user.findById(id).exec();
};

exports.findUserPerEmail = (email) => {
  return user.findOne({ "logInfos.email": email }).exec();
};
