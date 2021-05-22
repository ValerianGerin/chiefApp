const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const USERSCHEMA = schema({
  _id: schema.Types.ObjectId,
  name: String,
  logInfos: {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
});

USERSCHEMA.statics.hashPassword = async (password) => {
  try {
    const hashedPassword = bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

USERSCHEMA.methods.comparePassword = function (password) {
  try {
    return bcrypt.compare(password, this.logInfos.password);
  } catch (error) {
    throw error;
  }
};

const user = mongoose.model("users", USERSCHEMA);

module.exports = user;
