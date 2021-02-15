const jwt = require("jsonwebtoken");
const { secret } = require("./jwtSecret.config");
const { findUserPerID } = require("../queries/user.query");

/*Function used on protected routes too check if token and token is valid and create a 
user key on req that container the user info since the decodedToken contain the userID*/
exports.isAuthenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, secret);

      const user = await findUserPerID(decodedToken.payload);
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(404);
        next();
      }
    } catch (error) {
      res.status(401);
      res.end();
      throw error;
    }
  } else {
    next();
  }
};
