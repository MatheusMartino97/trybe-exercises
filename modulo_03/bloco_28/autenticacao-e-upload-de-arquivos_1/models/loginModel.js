const connection = require('./connection');

const log = async (user, password) => await connection()
    .then((db) => db.collection('history').insertOne({ user, password }))
    .then(({ ops }) => ops[0])

module.exports = {
  log
}