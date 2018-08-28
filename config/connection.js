// Set up MySQL connection.
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Louie2424!',
  database: 'burgers_db'
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);

}else{
  connection = mysql.createConnection({
    host: '	g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:'	y4673bae2rq1pe8y',
    password: 'kygb5tg9tycaw1xc'
  })
}