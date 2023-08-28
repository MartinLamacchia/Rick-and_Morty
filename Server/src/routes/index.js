const express = require("express");
const { verificarLogin } = require("../controllers/login");
const { postUser } = require("../controllers/postUser");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = express.Router();

router.get("/character/:id", getCharById);

router.get("/login", verificarLogin);

router.post("/login", postUser);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;
