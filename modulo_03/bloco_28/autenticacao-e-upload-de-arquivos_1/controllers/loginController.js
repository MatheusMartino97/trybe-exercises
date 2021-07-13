const usersModel = require('../models/usersModel');
const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

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

  const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig)

  return res.status(200).json({ token });
});

module.exports = {
  login,
};
