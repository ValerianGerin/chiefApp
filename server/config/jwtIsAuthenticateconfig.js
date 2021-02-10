const jwt = require("jsonwebtoken");
const { secret } = require("./jwtSecret.config");
const { findUserPerID } = require("../queries/user.query");

exports.isAuthenticate = (req, res, next) => {
  const token = req.headers.Authorization;
  if (token) {
    try {
      const decodedToken = jwt.verify(token, secret);
      const user = await findUserPerID(decodedToken.payload)
      if(user){
        req.user = user
        next()

      } else {
        res.status(401);
        next()
      }
    } catch (error) {}
  } else{
    next()
  }
};



