const { Temperament } = require("../db");
const axios = require("axios");

const getApiTempers = async (req, res) => {
  try {
    let response = await axios.get("https://api.thedogapi.com/v1/breeds");
    const dogsReturned = response.data;
    const tempers = dogsReturned.map((dog) => dog.temperament);

    const TOTALTEMPERS = [];
    let aux = [];
    for (let i = 0; i < tempers.length; i++) {
      if (tempers[i] !== undefined) {
        aux = tempers[i].split(", ");
        for (let j = 0; j < aux.length; j++) {
          TOTALTEMPERS.push(aux[j]);
        }
      }
    }
    let aux2 = new Set(TOTALTEMPERS);
    const SUMMARYTEMPERS = Array.from(aux2);
    return res.status(200).json(SUMMARYTEMPERS);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const fillDbTempers = async (req, res) => {
  try {
    await Temperament.bulkCreate(getApiTempers());
    res
      .status(200)
      .json({ message: "la base de datos ha cargado los colores" });
  } catch (error) {}
};

const getAllTempers = async (req, res) => {
  try {
    const allTempers = await Temperament.findAll();
    return res.status(200).json(allTempers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  fillDbTempers,
  getAllTempers,
};
