const usersModel = require('../models/usersModel');

const signIn = async (username, password) => {
  const signedUser = await usersModel
  .signIn(username, password)

  if (!signedUser) return null;

  return { _id: signedUser._id, username: signedUser.username };
}
  

const getAllUsers = async () => await usersModel.getAllUsers();

module.exports = {
  signIn,
  getAllUsers,
};
