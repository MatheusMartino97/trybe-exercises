const connection = require('./connection');

const getUser = async (username) =>
  await connection().then((db) => db.collection('users').findOne({ username }));

const signIn = async (username, password) => {
  const searchUser = await getUser(username);

  if (searchUser) return null;

  return await connection()
    .then((db) => db.collection('users').insertOne({ username, password }))
    .then(({ ops }) => ops[0]);
};

const getAllUsers = async () =>
  await connection().then((db) => db.collection('users').find().toArray());

module.exports = {
  signIn,
  getUser,
  getAllUsers,
};
