const user = require("../models/user.model");
const { findUserPerEmail, findUserPerID } = require("../queries/user.query");

exports.findUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await findUserPerID(id);
    res.json(user);
  } catch (error) {
    throw error;
  }
};

exports.newUser = async (req, res) => {
  const { name, email, password } = req.body;

  //First checking if the email is provided from the form
  const isValidEmail = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  if (isValidEmail !== null) {
    //Then checking if the email already exist since it's unique
    const emailAlreadyExist = await findUserPerEmail(email);

    if (emailAlreadyExist) {
      //If it already exist can't create the user
      res.status(409).json("Cet email existe deja");
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
        res.status(201).json("Utilisateur crée avec succès");
        newUser.save();
      } catch (error) {
        res.status(424).end();
        throw error;
      }
    }
  } else {
    res.status(422).json("Email invalide");
  }
};
