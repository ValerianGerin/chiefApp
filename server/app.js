require("./database/db.connect");
const express = require("express");
const app = express();
const router = require("./routes")
const PORT = process.env.PORT || 3000
exports.app = app


require("./middlewares/middleware");


app.use(router)

app.listen(PORT, ()=>{
  console.log(`App running on ${PORT} port`)
})