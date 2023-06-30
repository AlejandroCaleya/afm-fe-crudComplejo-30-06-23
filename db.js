// db.js
const mysql = require("mysql");

connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "mydbComplejo",
});

connection.connect((error) => {
	if (error) {
		console.error("Error connecting to the database: " + error.stack);
		return;
	}

	console.log("Connected to the database.");
});

module.exports = connection;
