const users = require("../utils/users");

const verificarLogin = function (req, res) {
  const { email } = req.query;
  const { password } = req.query;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) return res.status(200).json({ access: true });
  else return res.status(200).json({ access: false });
};

module.exports = {
  verificarLogin,
};
