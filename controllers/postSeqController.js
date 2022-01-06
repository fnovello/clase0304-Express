const User = require("../model/model-seq/user-model-seq");
const Post = require("../model/model-seq/post-model-seq");
const http = require("http-status-codes");

const getPostAll = async (req, res) => {
  //    const users = await User.findAll();
  const users = await User.findAndCountAll();
  res.json({ status: true, data: users });
};

const getPostByid = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findByPk(id);

  res.json({ status: true, data: post });
};

const createPost = async (req, res) => {
  const data = ({ iduser, title, body } = req.body);

  const post = await Post.create(data);
  res.json({ status: http.StatusCodes.OK, data: post });
 
};

const getPostUserById = async (req,res) => {
    const {id} = req.params;

    /*EAGER*/ 
    const result = await Post.findOne({
        where:{
            id:id
        },
        include:User
    })
    res.json({result});

    /*LAZY*/ 
    // const post = await Post.findByPk(id);
    // const user = await post.getUser();

    // res.json({post,user});

}


module.exports = {
  getPostAll,
  getPostByid,
  createPost,
  getPostUserById
};
