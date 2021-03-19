const jwt = require("jsonwebtoken");
const secret = process.env.secret;

exports.createToken = (userID) => {
  return jwt.sign({ payload: userID }, secret);
};
