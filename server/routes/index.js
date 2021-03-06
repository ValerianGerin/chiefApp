const { isAuthenticated } = require("../config/jwtIsAuthenticated.config");
const router = require("express").Router();
const userRouter = require("./user.routes");
const authRouter = require("./auth.routes");
const userRecipesRouter = require("./userRecipes.routes");

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/protected", isAuthenticated, userRecipesRouter);
//router.use("/recipes")

module.exports = router;
