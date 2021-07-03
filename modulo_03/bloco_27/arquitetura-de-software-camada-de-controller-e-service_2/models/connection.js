const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'tryber',
  password: '@APll0K1',
  database: 'cep_lookup',
});

module.exports = connection;
