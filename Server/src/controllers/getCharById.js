const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async function (req, res) {
  const { id } = req.params;
  try {
    const { data } = await axios(`${URL}${id}`);
    if (data.error) {
      res.status(404).json({ message: "Error 404 Character not found" });
    } else {
      const {
        id,
        status,
        name,
        species,
        origin,
        image,
        gender,
        location,
        created,
      } = data;
      const character = {
        id,
        status,
        name,
        species,
        origin,
        image,
        gender,
        location,
        created,
      };

      res.json(character);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCharById,
};
