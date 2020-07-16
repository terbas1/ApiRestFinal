var cors = require('cors');
var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"blog"
});
conn.connect();
module.exports = conn;
