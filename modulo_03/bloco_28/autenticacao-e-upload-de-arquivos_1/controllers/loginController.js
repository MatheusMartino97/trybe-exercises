const loginService = require('../services/loginService');
const rescue = require('express-rescue');

const log = rescue(async (req, res) => {
  const { user, password } = req.body;

  const response = await loginService.log(user, password);

  return res.status(200).json(response);
});

module.exports = {
  log,
};
