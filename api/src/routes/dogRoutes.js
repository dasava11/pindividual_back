const { Router } = require("express");
const {
  getAllDogs,
  createDog,
  getDogsId,
  getDogsName,
} = require("../controllers/dogController");

const router = Router();

router
  .get("/", getAllDogs)
  .get("/id/:id", getDogsId)
  .get("/name", getDogsName)
  .post("/", createDog);

module.exports = router;
