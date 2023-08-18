const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const app = express();

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

app.get("/error", (req, res, next) => {
  // Simulación de un error interno
  const error = new Error("Error interno en el servidor");
  error.status = 500;
  next(error);
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send("¡Algo salió mal!");
});

app.use("/rickandmorty", router);

module.exports = app;
