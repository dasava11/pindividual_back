const { Dog, Temperament } = require("../db");

const createDog = async (req, res) => {
  const { name, weight, height, life_span, image, temperament } = req.body;

  if (!name || !weight || !height || !life_span || !image || !temperament) {
    return res.status(400).json({ message: "Missing data to fill out" });
  }

  const existingDog = await Dog.findOne({
    where: { name },
  });

  if (existingDog) {
    return res
      .status(500)
      .json({ message: "The dog already exists in the database" });
  }

  const temperamentexisting = await Temperament.findAll({
    where: { name: temperament },
  });

  if (!temperamentexisting) {
    return res
      .status(500)
      .json({ message: "The temperament does not exist in the database" });
  }

  try {
    let dogCreate = await Dog.create({
      name,
      weight,
      height,
      life_span,
      image,
    });

    await dogCreate.addTemperaments(temperamentexisting);
    return res.status(201).json({ message: "Dog created successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createDog;
