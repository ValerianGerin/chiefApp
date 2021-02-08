const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
exports.app = app


require("./middlewares/middleware");


app.listen(PORT, ()=>{
  console.log(`App running on ${PORT} port`)
})