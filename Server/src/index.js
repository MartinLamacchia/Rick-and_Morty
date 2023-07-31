const http = require("http");
const url = require("url");
const characters = require("./utils/data");

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    if (path.includes("/rickandmorty/character")) {
      const id = path.split("/").pop();

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
