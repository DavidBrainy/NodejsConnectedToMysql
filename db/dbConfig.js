const mysql = require("mysql");

const dbConnection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "trainees",
});

dbConnection.connect((err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Database connected successfully");
});

module.exports = dbConnection;
