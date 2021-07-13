const usersModel = require('../models/usersModel');
const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');

const login = rescue(async (req, res) => {
  const { username, password } = req.body;

  const user = await usersModel.getUser(username);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Usuário ou senha inválidos!' });
  }

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const jwtPayload = {
    data: {
      user: username,
      admin: false,
    },
  };

  if (
    username === process.env.ADMIN_USERNAME ||
    password === process.env.ADMIN_PASSWORD
  ) {
    jwtPayload.data.admin = true;
  }

  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, jwtConfig);

  return res.status(200).json({ token });
});

module.exports = {
  login,
};
