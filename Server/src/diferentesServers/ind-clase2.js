const http = require("http");
const { getCharById } = require("../controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    if (url.includes("/rickandmorty/character")) {
      const id = url.split("/").pop();

      return getCharById(res, id);
    }

    res.writeHead(404);
    res.end();
  })
  .listen(3001, "localhost");
