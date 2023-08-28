const app = require("../Server/src/app");
const PORT = 3002;
const { conn } = require("./src/DB_connection");

conn.sync({ alter: true });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
