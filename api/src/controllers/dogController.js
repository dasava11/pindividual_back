//const { response } = require("../app");
const { where } = require("sequelize");
const { Dog } = require("../db");

const createDog = async (req, res) => {
  try {
    const { name, weight, height, life_span, image } = req.body;

    let dogCreate = await Dog.create({
      name,
      weight,
      height,
      life_span,
      image,
    });
    return res.status(201).json({ message: "Has creado un nuevo perro" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllDogs = async (req, res) => {
  try {
    let response = await Dog.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getDogsId = async (req, res) => {
  try {
    const { id } = req.params;
    let response = await Dog.findByPk(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getDogsName = async (req, res) => {
  try {
    const { name } = req.query;
    let response = await Dog.findOne({ where: { name } });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDog,
  getAllDogs,
  getDogsId,
  getDogsName,
};
