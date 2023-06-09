const { Dog, Temperament, Op } = require("../db");
const axios = require("axios");

const getDogsByName = async (req, res) => {
  const { name } = req.query;
  const responseNameApi = await axios.get(
    "https://api.thedogapi.com/v1/breeds"
  );

  if (name === "") {
    return res.status(400).json({
      message: "You must digital the name of the dog you want to obtain",
    });
  }
  try {
    let findDogDb = await Dog.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
      include: { model: Temperament },
    });

    let findDogApi = responseNameApi.data.filter((dog) =>
      dog.name.toLowerCase().includes(name.toLowerCase())
    );

    let dogFound = [...findDogApi, ...findDogDb];

    if (dogFound.length <= 0) {
      return res
        .status(400)
        .json({ message: "The Dog does not exist" });
    }

    return res.status(200).json(dogFound);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDogsByName;
