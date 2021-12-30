const express = require("express");
const postRouter = express.Router();
const { postRouteMiddleware } = require("../middleware/postRouteMiddleware");
const postController = require("../controllers/postController");

postRouter.use(postRouteMiddleware);

postRouter.get("/post/:id", (req, res, next) => {
  // return next(new AppError("Ha ocurrido un error 2", 500));
  // var a = b ;
  // console.log(req.params.id);
  // console.log(req.query.id);
  // console.log(req.query.userid);
  res.status(200).json(req.params);
});

postRouter.post("/post", postController.createPost);

// postRouter.post('/post', (req,res) => {
//     console.log(req.body);
//     // console.log("title - " + req.body.title);
//     // console.log("userid - " + req.body.userId);
//     // console.log("body- " + req.body.body);

//     let id = getNextIdPost();

//     let post = {};
//     post.userId = req.body.userId;
//     post.id = id;
//     post.title = req.body.title;
//     post.body = req.body.body;

//     const array_post =  JSON.parse(rs.getData());
//     array_post.push(post);

//     const response = rs.setData(JSON.stringify(array_post));
//     console.log('response: ', response);

//     if(response){
//         res.status(200).json({message: "created", post:post});
//     }else{
//         res.status(400).json({message: "fallo", post: {}});

//     }
// })

// const getNextIdPost = () => {
//     const all_posts = JSON.parse(rs.getData());
//     const last_post = all_posts[all_posts.length - 1];
//     console.log('last_post: ', last_post);
//     const id_next = last_post.id + 1 ;
//     return id_next;
// }

postRouter.put("/post", (req, res) => {
  res
    .status(200)
    .json({ message: "hola estoy en el server y soy un metodo put" });
});

postRouter.delete("/post", (req, res) => {
  res.status(200).json({ message: "hola  soy un metodo delete" });
});

module.exports = postRouter;
