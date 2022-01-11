const express = require("express");
const { postRouteMiddleware } = require("../middleware/postRouteMiddleware");
const authRouter = express.Router();
const authSeqController = require("../controllers/authController");


/**SEQUELIZE  */
authRouter.post("/api/auth/signup", authSeqController.signUp);
authRouter.post("/api/auth/login", authSeqController.login);

module.exports = authRouter;
