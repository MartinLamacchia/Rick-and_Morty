const http = require("http");
const characters = require("../utils/data");

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const {url} = req
    if (url.includes("/rickandmorty/character")) {
      const id = url.split("/").pop();

      const character = characters.find((char) => char.id === parseInt(id));

      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(character));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("Personaje no encontrado");
      }
    }

    res.writeHead(404)
    res.end()
  }).listen(3001, "localhost");
