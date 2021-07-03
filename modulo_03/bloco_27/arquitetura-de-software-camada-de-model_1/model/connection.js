const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = () => {
  console.log(process.env.DB_NAME)
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(process.env.DB_URL, OPTIONS).then((conn) => {
        db = conn.db(process.env.DB_NAME);
        return db;
      });
};

module.exports = connection;


// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'tryber',
//   password: '@APll0K1',
//   database: 'users_crud',
// });

// module.exports = connection;
