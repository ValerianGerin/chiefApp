const router = require("express").Router();
const { newUser, findUserById } = require("../controllers/user.controller");


router.post("/new", newUser);
router.get("/:id", findUserById);

module.exports = router;
