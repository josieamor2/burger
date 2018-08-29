// Set up MySQL connection.
var mysql = require('mysql');


var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        root: 3000,
        host: "localhost",
        user: "root",
        password: "Louie2424!",
        database: "burgers_db",
    });
};
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;

