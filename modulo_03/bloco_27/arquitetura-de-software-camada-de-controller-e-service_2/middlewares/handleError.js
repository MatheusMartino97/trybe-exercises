module.exports = (err, _req, res, _next) => {
  return res.status(err.type).json(err.message);
};
