var { Sequelize }  = require('sequelize');

var sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,{
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        dialect:process.env.DB_CONNECTION
    }
)

sequelize.authenticate().then(() => {
    console.log("Estoy conectado a la base de datos con sequelize")
}).catch((err) => {
    console.log('err: ', err);
})

module.exports = sequelize;