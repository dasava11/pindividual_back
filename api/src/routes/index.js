const { Router } = require("express");
const dogRoutes = require("./dogRoutes");
const temperamentRoutes = require("./temperamentRoutes");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/dogs", dogRoutes);
router.use("/temper", temperamentRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
