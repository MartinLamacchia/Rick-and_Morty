const { Favorite } = require("../DB_connection");

const getAllFav = async (req, res) => {
  try {
    const allFavorites = await Favorite.findAll();
    res.json(allFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllFav,
};
