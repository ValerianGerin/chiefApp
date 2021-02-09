const router = require("express").Router();
const { newUser } = require("../controllers/user.controller");

router.post("/new", newUser);

module.exports = router;
