const validateJWT = require('./validateJWT');
const validateUsername = require('./validateUsername');
const validatePassword = require('./validatePassword');
const decode = require('./decode')

module.exports = {
  validateJWT,
  validateUsername,
  validatePassword,
  decode
};
