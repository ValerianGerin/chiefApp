const { findUserPerEmail } = require("../queries/user.query");
const { createToken } = require("../config/jwtCreate.config");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //First checking if user exist
    const user = await findUserPerEmail(email);

    if (user !== null) {
      //Then checking if the provided password match with the password of the instance
      const match = await user.comparePassword(password);

      if (match) {
        const token = createToken(user._id);
        res.send(token);
      } else {
        res.status(401).json("Veuillez verifier le mot de passe");
     
      }
    } else {
      res.status(401).json("Veuillez verifier l'email");
     
    }
  } catch (e) {
    res.status(500).json("Une erreur s'est produite veuillez réessayer")
    throw e;
    
  }
};
