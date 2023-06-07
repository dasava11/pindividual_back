const { Dog, Temperament } = require("../db");
const axios = require("axios");

const getDogsById = async (req, res) => {
  const { id } = req.params;
  //const regex = /-.*-/;

  if (id === "") {
    return res.status(400).json({
      message: `You must digital the ${id} of the dog you want to obtain`,
    });
  }

  if (id.length < 5) {
    const responseIdApi = await axios.get(
      "https://api.thedogapi.com/v1/breeds"
    );
    let dogById = responseIdApi.data.find((dog) => dog.id == id);

    try {
      if (!dogById) {
        return res.status(400).json({ message: "Dog not found" });
      }
      return res.status(200).json(dogById);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  try {
    let responseIdDb = await Dog.findByPk(id, {
      include: { model: Temperament },
    });
    if (!responseIdDb) {
      return res.status(400).json({ message: "Dog not found" });
    }

    return res.status(200).json(responseIdDb);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getDogsById;
