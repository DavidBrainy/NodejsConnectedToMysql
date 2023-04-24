const router = require("express").Router;
// const express = require("express");
const traineeController = require("../controller/traineeController");

// const router = express.Router();

const traineeRouter = router();

traineeRouter.get("/", traineeController.getAllTrainees);

traineeRouter.get("/:id", traineeController.getOneTrainee);

traineeRouter.post("/", traineeController.addTrainee);

traineeRouter.put("/:id", traineeController.editedTrainee);

traineeRouter.delete("/:id", traineeController.deleteTrainee);

// router.delete("/:id", traineeController.deleteTrainee);

module.exports = traineeRouter;
