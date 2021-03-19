const router = require("express").Router();
const { newUser } = require("../controllers/user.controller");
const { findUserPerID } = require("../queries/user.query");

router.post("/new", newUser);
router.get("/:id", findUserPerID);

module.exports = router;
