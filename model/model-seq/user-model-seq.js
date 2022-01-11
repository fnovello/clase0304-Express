const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../database/sequelizeConnection");
const Post = require("./post-model-seq");
const bcrypt = require("bcrypt");

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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user",
    sequelize,
  }
);

User.beforeCreate(async (user, options) => {
  const salt = await bcrypt.genSalt();
  return bcrypt
    .hash(user.password, salt)
    .then((hash) => {
      user.password = hash;
    })
    .catch((err) => console.log(err));
});


User.prototype.comparePassword = async (passaword,user) => {
  return await bcrypt.compare(passaword,user.password);
} 

Post.belongsTo(User, { foreignKey: "iduser" });
User.hasMany(Post, { foreignKey: "iduser" });

module.exports = User;
