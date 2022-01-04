const express = require("express");
const userRouter = express.Router();
const {
  appRoutePostTimestampMiddleware,
} = require("../middleware/appMiddleware");

const userController = require("../controllers/userController");

userRouter.get("/users", userController.getUserAll);
userRouter.get("/user/:id", userController.getUserByid);
userRouter.post("/user", userController.createUser);
userRouter.put("/user", userController.updateUser);
userRouter.delete("/user", userController.deleteUser);

module.exports = userRouter;
