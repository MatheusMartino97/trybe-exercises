const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const usersModel = require('../models/usersModel');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = rescue(async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    const user = await usersModel.getUser(decode.data.username);

    if (!user) {
      return res
        .status(404)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
});
