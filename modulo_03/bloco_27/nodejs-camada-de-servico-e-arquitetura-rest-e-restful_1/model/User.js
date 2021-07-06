const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((result) =>
      result.map(({ _id, firstName, lastName, email }) => ({
        id: _id,
        firstName,
        lastName,
        email,
      }))
    );
};

// const getAll = () => {
//   return connection.execute('SELECT * FROM users_crud.users')
//     .then((result) => result[0])
// }

const getById = (id) => {
  return connection()
    .then((db) => db.collection('users').find(new ObjectId(id)).toArray())
    .then((result) => result);
};

const create = (firstName, lastName, email, password) => {
  return connection()
    .then((db) =>
      db.collection('users').insertOne({ firstName, lastName, email, password })
    )
    .then((result) => ({
      id: result.insertedId,
      firstName,
      lastName,
      email,
      password,
    }))
    .catch((err) => console.log(err.message));
};

module.exports = {
  // create,
  getAll,
  // getById,
};
