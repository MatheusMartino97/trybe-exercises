module.exports = (req, res, next) => {
  const { token } = req.headers;

  if (!token || !token.length) {
    res.status(401).json({ message: 'Token inválido' });
  }

  next();
};
