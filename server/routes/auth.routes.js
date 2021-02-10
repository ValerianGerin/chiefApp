const router = require("express").Router();
const { login } = require("../controllers/auth.controllers");

router.post("/signin", login);

module.exports = router;
