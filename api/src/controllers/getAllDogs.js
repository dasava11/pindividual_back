const { Dog, Temperament } = require("../db");
const axios = require("axios");

const getAllDogs = async (req, res) => {
  try {
    let responseAPI = await axios.get("https://api.thedogapi.com/v1/breeds");
    let responseDB = await Dog.findAll({ include: { model: Temperament } });

    if (!responseAPI) {
      return res.status(404).json({ message: "Server Not Found" });
    }
    let allDogs = [...responseAPI.data, ...responseDB];
    return res.status(200).json(allDogs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllDogs;
