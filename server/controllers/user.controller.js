const user = require("../models/user.model");
const { findUserPerEmail } = require("../queries/user.query");

exports.newUser = async (req, res) => {
  const { name, email, password } = req.body;

  //First checking if the email is provided from the form
  const availableEmail = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  if (availableEmail !== null) {
    //Then checking if the email already exist since it's unique
    const emailAlreadyExist = await findUserPerEmail(email);

    if (emailAlreadyExist) {
      //If it already exist can't create the user
      res.status(409);
      res.json("Cet email est deja utilisé");
    } else {
      try {
        //Calling statics method on the model to hash the password
        const hashedPassword = await user.hashPassword(password);

        const newUser = new user({
          _id: null,
          name: name,
          logInfos: {
            email: email,
            password: hashedPassword,
          },
        });
        res.status(201);
        newUser.save();
      } catch (error) {
        res.status(424);
        res.end();
        throw error;
      }
    }
  }
  res.end();
};
