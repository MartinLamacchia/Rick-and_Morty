const express = require("express");
const { verificarLogin } = require("../controllers/login");
const { postUser } = require("../controllers/postUser");
const { getCharById } = require("../controllers/getCharById");
const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav");
const { getAllFav } = require("../controllers/getAllFav");

const router = express.Router();

router.get("/character/:id", getCharById);

router.get("/login", verificarLogin);

router.post("/login", postUser);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

router.get("/fav", getAllFav);

module.exports = router;
