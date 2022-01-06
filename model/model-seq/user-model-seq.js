const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../database/sequelizeConnection");
const Post = require('./post-model-seq');


class User extends Model {}

User.init(
  {
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    tableName: "user",
    sequelize
  }
);

Post.belongsTo(User,{foreignKey:'iduser'});
User.hasMany(Post,{foreignKey:'iduser'});

module.exports = User; 