const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kimgusqls1",
  database: "opentutorials",
});

connection.connect();

connection.query("SELECT * FROM topic", function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end();
