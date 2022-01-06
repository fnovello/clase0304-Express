const express = require("express");
const userRouter = express.Router();

const {
  appRoutePostTimestampMiddleware,
} = require("../middleware/appMiddleware");

const userController = require("../controllers/userController");
const userSeqController = require("../controllers/userSeqController");

userRouter.post("/api/user", userSeqController.createUser);
userRouter.get("/api/users", userSeqController.getUserAll);
userRouter.get("/api/user/:id", userSeqController.getUserByid);
userRouter.get("/api/user/:id/posts", userSeqController.getPostsUserById);
userRouter.get("/api/useresta", userSeqController.getEstadistica);
// userRouter.put("/api/user", userSeqController.updateUser);
// userRouter.delete("/api/user", userSeqController.deleteUser);


userRouter.get("/users", userController.getUserAll);
userRouter.get("/user/:id", userController.getUserByid);
userRouter.post("/user", userController.createUser);
userRouter.put("/user", userController.updateUser);
userRouter.delete("/user", userController.deleteUser);

module.exports = userRouter;
