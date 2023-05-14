const { Dog } = require("../db");

const createDog = async (req, res) => {
  const { name, weight, height, life_span, image, temperament } = req.body;

  if (
    !name ||
    !weight ||
    !height ||
    !life_span ||
    !image /* || !temperament*/
  ) {
    return res.status(400).json({ message: "Faltan datos por diligenciar" });
  }

  const existingDog = await Dog.findOne({
    where: { name },
  });

  if (existingDog) {
    return res
      .status(500)
      .json({ message: "El perro ya existe en la base de datos" });
  }

  try {
    let dogCreate = await Dog.create({
      name,
      weight,
      height,
      life_span,
      image,
    });
    dogCreate.addTemperaments(temperament);
    return res.status(201).json({ message: "Perro creado exitosamente" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createDog;
