const jwt = require("jsonwebtoken");
const { findUserPerID } = require("../queries/user.query");
const secret = process.env.secret;

/*Function used on protected routes too check if token is valid and create a 
key user on req that container the user infos*/
exports.isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, secret);

      const user = await findUserPerID(decodedToken.payload);
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(404).end();
      }
    } catch (error) {
      res.status(401).end();

      throw error;
    }
  } else {
    res.status(404).end();
  }
};
