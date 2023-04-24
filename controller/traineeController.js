const dbConnection = require("../db/dbConfig");

const getAllTrainees = (req, res) => {
	dbConnection.query(`SELECT * from trainee_info`, (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		res.status(200).send(result);
	});
};

const getOneTrainee = (req, res) => {
	const id = req.params.id;
	dbConnection.query(
		`SELECT * from trainee_info WHERE trainee_id = '${id}'`,
		(err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			res.status(200).send(result);
		}
	);
};

const editedTrainee = (req, res) => {
	const id = req.params.id;
	const { name, sex, pronoun } = req.body;
	dbConnection.query(
		`UPDATE trainee_info SET trainee_name = ${name}, trainee_sex =${sex},
        trainee_pronoun = ${pronoun} WHERE trainee_id = ${id}`,
		(err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			res.status(200).send(result);
		}
	);
};

const addTrainee = (req, res) => {
	const { id, name, sex, pronoun } = req.body;
	// console.log(req.body);
	dbConnection.query(
		`INSERT INTO trainee_info VALUES(
	    '${id}', '${name}', '${sex}', '${pronoun}'
	)`,
		(err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			res.status(200).send(result);
		}
	);
};

const deleteTrainee = (req, res) => {
	const id = req.params.id;
	dbConnection.query(
		`DELETE From trainee_info WHERE trainee_id  = '${id}'`,
		(err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			res.status(200).send(result);
		}
	);
};

module.exports = {
	getAllTrainees,
	getOneTrainee,
	editedTrainee,
	addTrainee,
	deleteTrainee,
};
