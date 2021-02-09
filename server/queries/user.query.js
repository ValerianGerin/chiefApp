const user = require("../models/user.model");

exports.findUserPerEmail = (email) => {

  return user.findOne({ "logInfos.email": email }).exec();
};



