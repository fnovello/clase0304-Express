const User = require("../model/model-seq/user-model-seq");
const http = require("http-status-codes");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const data = ({ firstname, lastname, username, password } = req.body);

  try {
    const exists_user = await User.findAndCountAll({
      where: {
        username: data.username,
      },
      attributes: ["firstname", "username"],
    });

    if (!exists_user.count) {
      const user = await User.create(data);
      if (user) {
        const token = _createToken(user.iduser, user.username);
        res.set("Authorization", "Bearer " + token);
        return res.json({ status: http.StatusCodes.OK, data: user });
      }
    }

    return res.json({
      status: http.StatusCodes.OK,
      data: "Username existente ingrese  otro",
    });
  } catch (error) {
    console.log("error: ", error);
    return res.json({
      status: http.StatusCodes.INTERNAL_SERVER_ERROR,
      data: {},
    });
  }
};

const _createToken = (id, username) => {
  return jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "1m",
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      username,
    },
  });

  if (user) {
    const result = await user.comparePassword(password, user);

    if (result) {
      const token = _createToken(user.iduser, user.username);
      console.log('token: ', token);
      res.set("Authorization", "Bearer " + token);
      return res.json({ status: http.StatusCodes.OK, data: "Authenticated" });
    }
  }
  return res.json({ status: http.StatusCodes.OK, data: "Unautheticated" });
};

module.exports = {
  signUp,
  login,
};
