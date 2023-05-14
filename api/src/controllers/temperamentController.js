const { Temperament } = require("../db");
const axios = require("axios");

const getApiTempers = async () => {
  let response = await axios.get("https://api.thedogapi.com/v1/breeds");
  let findTemper = response.data
    .map((dog) => dog.temperament)
    .toString()
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t.length > 1);

  let allTempers = [...new Set(findTemper)];

  await Temperament.bulkCreate(
    allTempers.map((t) => {
      return { name: t };
    })
  );
};

module.exports = getApiTempers;
