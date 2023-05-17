const { Dog } = require("../db");

const getDogsByName = async (req, res) => {
  const { name } = req.query;
  if (name === "") {
    return res
      .status(400)
      .json({ message: "Debe digital el nombre del perro que desea obtener" });
  }
  try {
    let response = await Dog.findOne({ where: { name } });
    //({where: { name: {[Op.iLike]: "%" + name + "%",},}, include: {model: Temper}});
    if (!response) {
      return res.status(400).json({ message: "Perro no encontrado" });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDogsByName;
