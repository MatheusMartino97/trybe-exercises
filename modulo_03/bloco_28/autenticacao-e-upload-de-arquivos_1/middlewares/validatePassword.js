const rescue = require('express-rescue');

module.exports = rescue(async (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res
      .status(401)
      .json({ error: 'O campo "password" não pode estar em branco.' });
  }

  if (typeof password !== 'string' || password.length < 5) {
    return res.status(401).json({ error: 'Senha inválida.' });
  }

  next();
});
