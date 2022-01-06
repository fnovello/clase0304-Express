const User = require("../model/model-seq/user-model-seq");
const Post = require("../model/model-seq/post-model-seq");
const http = require("http-status-codes");
const sequelize = require("../database/sequelizeConnection");
const { QueryTypes } = require("sequelize");

const getUserAll = async (req, res) => {
  //    const users = await User.findAll();
  const users = await User.findAndCountAll();
  res.json({ status: true, data: users });
};

const getUserByid = async (req, res) => {
  const { id } = req.params;

  // const user = await User.findByPk(id,{
  //     attributes: ["username"]
  // })

  const user = await User.findOne({
    attributes: ["username"],
    where: {
      lastname: "perez",
    },
  });

  res.json({ status: http.StatusCodes.OK, data: user });

};

const createUser = async (req, res) => {
  const data = ({ firstname, lastname, username } = req.body);

  const user = User.build(data);
  console.log("user: ", user);
  try {
    const result = await user.save();
    res.json({ status: http.StatusCodes.OK, data: result });
  } catch (error) {
    res.json({ status: http.StatusCodes.INTERNAL_SERVER_ERROR, data: "ERROR" });
  }
  //   const user = await User.create(data);
};

const getPostsUserById = async (req, res) => {
  const { id } = req.params;

  /*eager */
  // const user = await  User.findByPk(id);
  // const posts = await user.getPosts();
  // res.json({user,posts});

  /*lazy */
  const result = await User.findOne({
    where: {
      iduser: id,
    },
    include: Post,
  });
  res.json(result);
};

const getEstadistica = async (req, res) => {
  const result = await sequelize.query(
    `SELECT 
        u.iduser, u.username, COUNT(*) AS 'cant_posts'
    FROM
        user u
            JOIN
        post p ON u.iduser = p.iduser
    GROUP BY u.iduser`,
    {
      type: QueryTypes.SELECT,
    }
  );

  res.json(result);
};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = {
  getUserAll,
  getUserByid,
  createUser,
  updateUser,
  deleteUser,
  getPostsUserById,
  getEstadistica,
};
