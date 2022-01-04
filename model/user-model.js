const db = require("../database/mysqlConnection");

const user = {
  table: "user",
  conec: db.connection,

  getUserAll: function (callback) {
    this.conec.query(`SELECT * FROM ${this.table}`, callback);
  },
  getUserByid: function (id, callback) {
    this.conec.query(
      `SELECT * FROM ${this.table} WHERE iduser = ?`,
      [id],
      callback
    );
  },
  createUser: function (data, callback) {
    this.conec.query(
      `INSERT INTO ${this.table}  (firstname, lastname, username) VALUES  (?, ?, ?)`,
      [data.firstname, data.lastname, data.username],
      callback
    );
  },
  updateUser: function (id, data, callback) {
    let array = [data.firstname, id];
    let sql = `UPDATE ${this.table} SET firstname = ? WHERE iduser = ?`;
    this.conec.query(sql, array, callback);
  },
  deleteUser: function (id, callback) {
    let sql = `DELETE FROM ${this.table} WHERE iduser = ?`;
    this.conec.query(sql, [id], callback);
  },
};

module.exports = user;
