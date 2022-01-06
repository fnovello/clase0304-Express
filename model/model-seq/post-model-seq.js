const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../database/sequelizeConnection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    iduser: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
  },
  {
    tableName: "post",
    sequelize
  }
);

module.exports = Post; 