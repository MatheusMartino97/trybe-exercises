const loginModel = require('../models/loginModel');

const log = async (user, password) =>
  await loginModel.log(user, password).then(({ _id, user }) => ({ _id, user }));

module.exports = {
  log,
};
