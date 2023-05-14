const { Router } = require("express");
const getAllTempers = require("../controllers/getAllTempers");

const router = Router();

router.get("/", getAllTempers);

module.exports = router;
