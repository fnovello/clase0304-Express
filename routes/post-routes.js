const express = require("express");
const { postRouteMiddleware } = require("../middleware/postRouteMiddleware");
const postRouter = express.Router();
const postController = require("../controllers/postController");
const postSeqController = require("../controllers/postSeqController");
const {
  appRoutePostTimestampMiddleware,
} = require("../middleware/appMiddleware");

postRouter.use(postRouteMiddleware);





/**SEQUELIZE  */
postRouter.post("/api/post", postSeqController.createPost);
postRouter.get("/api/posts", postSeqController.getPostAll);
postRouter.get("/api/post/:id", postSeqController.getPostByid);
postRouter.get("/api/post/:id/user", postSeqController.getPostUserById);
// userRouter.put("/api/user", userSeqController.updateUser);
// userRouter.delete("/api/user", userSeqController.deleteUser);







/**SQL  */
/**Obtener un post por id de post */
postRouter.get("/post/:id", (req, res, next) => {
  // return next(new AppError("Ha ocurrido un error 2", 500));
  res.status(200).json(req.params);
});

/** Retornar todos los posts */
postRouter.get("/post", (req, res) => {
  res.status(200).json(req.params);
});

postRouter.use("/post", appRoutePostTimestampMiddleware);

/** Crea un post */
postRouter.post("/post", postController.createPost);

postRouter.put("/post", (req, res) => {
  res
    .status(200)
    .json({ message: "hola estoy en el server y soy un metodo put" });
});

postRouter.delete("/post", (req, res) => {
  res.status(200).json({ message: "hola  soy un metodo delete" });
});

module.exports = postRouter;
