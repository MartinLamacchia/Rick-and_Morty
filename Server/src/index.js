const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const app = express();
const PORT = 3001;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(morgan("dev"));

app.use("/rickandmorty", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
