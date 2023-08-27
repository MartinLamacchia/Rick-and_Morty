const app = require("../Server/src/app");
const PORT = 3002;
const { conn } = require("./src/DB_connection");

conn.sync({ force: true });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
