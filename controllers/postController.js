const rs = require("../service/readWrite");

const createPost = (req, res) => {
  let id = getNextIdPost();

  let post = {};
  post.userId = req.body.userId;
  post.id = id;
  post.title = req.body.title;
  post.body = req.body.body;

  const array_post = JSON.parse(rs.getData());
  array_post.push(post);

  const response = rs.setData(JSON.stringify(array_post));

  if (response) {
    res.status(200).json({ message: "created", post: post });
  } else {
    res.status(400).json({ message: "fallo", post: {} });
  }
};

const getNextIdPost = () => {
  const all_posts = JSON.parse(rs.getData());
  const last_post = all_posts[all_posts.length - 1];
  console.log("last_post: ", last_post);
  const id_next = last_post.id + 1;
  return id_next;
};

module.exports = { createPost };
