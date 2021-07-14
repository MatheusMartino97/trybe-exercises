const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET);

    return res.status(200).json(decode.data)
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}