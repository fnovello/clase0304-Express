var mysql = require("mysql");


var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// connection
// connection.query('SELECT * FROM user WHERE username = ?', ['fnovello'], function (error, results, fields) {
// connection.query('SELECT * FROM user',  function (error, results, fields) {
//     if(error) console.log(error);
//      console.log('results: ', results);
// });

module.exports = {connection}