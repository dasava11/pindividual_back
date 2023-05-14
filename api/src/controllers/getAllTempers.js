const { Temperament } = require("../db");

const getAllTempers = async (req, res) => {
  try {
    const allTempers = await Temperament.findAll();
    return res.status(200).json(allTempers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllTempers;
