// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
const mysql = require("mysql");

// Set up our connection information
const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "ITILfoun1!",
  database: "profile_DB"
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
