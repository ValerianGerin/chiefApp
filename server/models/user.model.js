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
  const hashedPassword = bcrypt.hash(password, 10);
  return hashedPassword;
};

USERSCHEMA.methods.comparePassword = function(password){
  return bcrypt.compare(password, this.logInfos.password)
}


const user = mongoose.model("users", USERSCHEMA);



module.exports = user