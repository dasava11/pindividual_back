const { Router } = require("express");
const { getAllTempers } = require("../controllers/temperamentController");

const router = Router();

router.get("/", getAllTempers);

module.exports = router;
