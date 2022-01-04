const User = require("../model/user-model");
const http = require("http-status-codes");

const getUserAll = (req, res) => {
  User.getUserAll(function (err, data) {
    if (err) console.log(err);

    if (data.length > 0) {
      res.json({ status: http.StatusCodes.OK, data: data });
    } else {
      res.json({ status: http.StatusCodes.NOT_FOUND, data: [] });
    }
  });
};

const getUserByid = (req, res) => {
  const { id } = req.params;

  User.getUserByid(id, function (err, data) {
    if (data.length > 0) {
      res.json({ status: true, data: data });
    } else {
      res.json({ status: http.StatusCodes.NOT_FOUND, data: [] });
    }
  });
};

const createUser = (req, res) => {
  const data = ({ firstname, lastname, username } = req.body);

  User.createUser(data, function (err, rows) {
    if (err) {
      return res.json({
        status: http.StatusCodes.INTERNAL_SERVER_ERROR,
        data: {},
      });
    }

    data.id = rows.insertId;

    res.json({ status: http.StatusCodes.OK, data: data });
  });
};

const updateUser = (req, res) => {
  const { id } = req.body;
  const data = req.body;

  if (id) {
    User.updateUser(id, data, function (err, rows) {
      if (err) {
        return res.json({
          status: http.StatusCodes.INTERNAL_SERVER_ERROR,
          data: err,
        });
      }

      console.log("rows: ", rows);
      if (rows.affectedRows == 1) {
        res.json({ status: http.StatusCodes.OK, data: data });
      }
    });
  } else {
    res.json({
      status: http.StatusCodes.PRECONDITION_REQUIRED,
      data: "Falta id",
    });
  }
};

const deleteUser = (req, res) => {
  const { id } = req.body;

  if (id) {
    User.deleteUser(id, function (err, rows) {
      if (err) {
        return res.json({
          status: http.StatusCodes.INTERNAL_SERVER_ERROR,
          data: err,
        });
      }

      if (rows.affectedRows == 1) {

        res.json({ status: http.StatusCodes.OK, data: {} });

      }else{

        res.json({ status: http.StatusCodes.INTERNAL_SERVER_ERROR, data: {} });

      }
    });
  } else {
    res.json({
      status: http.StatusCodes.PRECONDITION_REQUIRED,
      data: "Falta id",
    });
  }
};

module.exports = {
  getUserAll,
  getUserByid,
  createUser,
  updateUser,
  deleteUser,
};
