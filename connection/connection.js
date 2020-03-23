var mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "Ellie0405#oracle",
    database: "employeesDb"
  });

  connection.connect(function(err) {
  if (err) {
      console.error("error connecting: " + err.stack);
      return;
  }
});

module.exports = connection;