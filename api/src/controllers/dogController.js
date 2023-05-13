//const { response } = require("../app");
const { where } = require("sequelize");
const { Dog } = require("../db");

const postDog = async (req, res) => {
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

const getAllDogsBd = async (req, res) => {
  try {
    let response = await Dog.findAll();
    if (!response) {
      return res.status(200).json({message: "No existen perros"})
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getDogsId = async (req, res) => {
  const { id } = req.params;
  if (id==="") {
    return res.status(400).json({message: "Debe digital el ID del perro que desea obtener"})
  };
  try {
    let response = await Dog.findByPk(id);
    if(!response){
      return res.status(200).json({message: "Perro no encontrado"})
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getDogsName = async (req, res) => {
  const { name } = req.query;
  if (name === "") {
    return res.status(400).json({message: "Debe digital el nombre del perro que desea obtener"})
  };
  try {
    let response = await Dog.findOne({ where: { name } });
    if (!response) {
      return res.status(200).json({message: "Perro no encontrado"})
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDog,
  getAllDogsBd,
  getDogsId,
  getDogsName,
};
