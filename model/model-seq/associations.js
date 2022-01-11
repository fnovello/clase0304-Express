require('dotenv').config();
const sequelize = require('../../database/sequelizeConnection');
const User = require('./user-model-seq');
// const Post = require('./post-model-seq');

User.sync({alter:true});
// Post.belongsTo(User,{foreignKey:'iduser'});
// User.hasMany(Post,{foreignKey:'iduser'});

// sequelize.sync({alter:true});
