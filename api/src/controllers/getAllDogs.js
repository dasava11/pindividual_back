const {Dog}=require("../db")

const getAllDogs = async (req, res) => {
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

  module.exports=getAllDogs