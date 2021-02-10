const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/cookingApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connexion db ok"))
  .catch((error) => {
    console.log(error);
  });
