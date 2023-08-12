let myFavorites = [];

const postFav = function (req, res) {
  const newFavorite = req.body;
  myFavorites.push(newFavorite);
  res.json(myFavorites);
};

const deleteFav = function (req, res) {
  const { id } = req.params;
  myFavorites = myFavorites.filter((fav) => fav.id !== Number(id));
  res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
