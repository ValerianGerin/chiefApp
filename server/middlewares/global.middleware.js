const cors = require("cors");
const bodyParser = require("body-parser");
const { app } = require("../app");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
