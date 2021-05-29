if(process.env.NODE_ENV !== "production") require('dotenv/config');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DATABASE_HOST,
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE_SCHEME
});
 
console.log(process.env.DATABASE_SCHEME);

connection.connect();
 
connection.query('SELECT * from contatos', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();