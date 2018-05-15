var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // port may be wrong...!!!!!!!!!!!!

  // Your username
  user: "root",

  // Your password
  password: "root",
  //password may be wrong !!!!!!!!!!!  

  database: "Movie_App"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readMovie_App(); // name change 
  
});

function readMovie_App() { // function name was changed. 
  connection.query("SELECT name FROM Movie_App", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
// I don't get it, why are we selecting name from Movie_App here again???
// got this connection from the homework colleges.js
// changed  readColleges();  and  function readColleges() {


