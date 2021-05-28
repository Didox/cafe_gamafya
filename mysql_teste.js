var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'gamafya'
});
 
connection.connect();
 
connection.query('SELECT * from contatos', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();