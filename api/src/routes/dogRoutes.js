const { Router } = require("express");

const createDog = require("../controllers/postDog");
const getDogsByName = require("../controllers/getDogsByName");
const getDogsById = require("../controllers/getDogsById");
const getAllDogs = require("../controllers/getAllDogs");

const router = Router();

router
  .get("/", getAllDogs)
  .get("/id/:id", getDogsById)
  .get("/name", getDogsByName)
  .post("/", createDog);

module.exports = router;
