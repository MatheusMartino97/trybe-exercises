const rescue = require('express-rescue');

module.exports = rescue(async (req, res, next) => {
  const { username } = req.body;

  if (!username) {
    return res
      .status(401)
      .json({ error: 'O campo "username" não pode estar em branco.' });
  }

  if (typeof username !== 'string' || username.length < 5) {
    return res.status(401).json({ error: 'Usuário inválido.' });
  }

  next();
});
