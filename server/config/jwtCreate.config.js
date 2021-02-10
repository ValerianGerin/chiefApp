const jwt = require("jsonwebtoken");
const { secret } = require("./jwtSecret.config");

exports.createToken = (userID) => {
  return jwt.sign({ payload: userID }, secret);
};
