const connection = require('./connection');

const getCEP = async (cep) => {
  const [response] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep=?',
    [cep]
  );

  return response;
};

module.exports = {
  getCEP,
};
