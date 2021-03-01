const mongoose = require("mongoose");

mongoose
  .connect("  mongodb+srv://admin:quasar001@cluster0.7nlao.mongodb.net/cookingApp?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connexion db ok"))
  .catch((error) => {
    console.log(error);
  });


