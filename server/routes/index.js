const router = require("express").Router();
const userRouter = require("./user.routes");

router.use("/user", userRouter)
//router.use("/auth")
//router.use("/recipes")


module.exports = router