const { Temperament } = require("../db");

const getAllTempers = async (req, res) => {
  let response = await Temperament.findAll();
  try {
  } catch (error) {}
};

module.exports = {
  getAllTempers,
};
