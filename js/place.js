//create database
//  var sql = "CREATE TABLE signup (id INT AUTO_INCREMENT PRIMARY KEY,firstName VARCHAR(255),lastName VARCHAR(255),email VARCHAR(255),password VARCHAR(255),age INT(10),interest VARCHAR(255),phno VARCHAR(255))";

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
