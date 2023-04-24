const express = require("express");
require("./db/dbConfig");
const traineeRouter = require("./routes/traineeRoutes");

const app = express();
app.use(express.json());

app.use("/trainees", traineeRouter);

app.use("*", (req, res) => {
	res.status(404).send("Error 404: page not found");
});

app.listen(4000, () => {
	console.log("Server running on http://localhost:4000");
});
