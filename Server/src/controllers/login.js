const { User } = require("../DB_connection");

const verificarLogin = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const usuarioCorrecto = await User.findOne({
      where: {
        email,
      },
    });
    // res.json(usuarioCorrecto[0].password);
    if (!usuarioCorrecto) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      if (usuarioCorrecto.password === password) {
        return res.json({ access: true });
      } else {
        return res.status(403).json({ message: "Contraseña incorrecta" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// ! SIN BASE DE DATOS
// const users = require("../utils/users");

// const verificarLogin = function (req, res) {
//   const { email } = req.query;
//   const { password } = req.query;

//   console.log(email, password);

//   const user = users.find(
//     (user) => user.email === email && user.password === password
//   );

//   if (user) return res.status(200).json({ access: true });
//   else return res.status(200).json({ access: false });
// };

module.exports = {
  verificarLogin,
};
