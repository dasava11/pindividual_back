const {Dog}=require("../db")

const getDogsById = async (req, res) => {
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

  module.exports= getDogsById
