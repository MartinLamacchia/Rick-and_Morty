const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const newUser = await User.create({
      email,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postUser,
};
