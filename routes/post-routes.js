const express = require("express");
const { postRouteMiddleware } = require("../middleware/postRouteMiddleware");
const postRouter = express.Router();
const postController = require("../controllers/postController");
const postSeqController = require("../controllers/postSeqController");
const {
  appRoutePostTimestampMiddleware,
} = require("../middleware/appMiddleware");

postRouter.use(postRouteMiddleware);
postRouter.use("/post", appRoutePostTimestampMiddleware);

/**SEQUELIZE  */
postRouter.post("/api/post", postSeqController.createPost);
postRouter.get("/api/posts", postSeqController.getPostAll);
postRouter.get("/api/post/:id", postSeqController.getPostByid);
postRouter.get("/api/post/:id/user", postSeqController.getPostUserById);
postRouter.put("/api/user", postSeqController.updateUser);
postRouter.delete("/api/user", postSeqController.deleteUser);

module.exports = postRouter;
