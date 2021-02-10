const router = require("express").Router();
const userRouter = require("./user.routes");
const authRouter = require("./auth.routes");

router.use("/user", userRouter)
router.use("/auth", authRouter)
//router.use("/recipes")


module.exports = router