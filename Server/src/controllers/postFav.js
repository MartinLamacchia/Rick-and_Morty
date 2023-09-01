const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, image, species, gender } = req.body;
  console.log(id, name, image, species, gender);
  try {
    if (!id || !name || !image || !species || !gender) {
      return res.status(401).json({ message: "Faltan datos" });
    }
    await Favorite.create({
      id,
      name,
      image,
      species,
      gender,
    });
    const allFavorites = await Favorite.findAll();
    return res.json(allFavorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postFav,
};
