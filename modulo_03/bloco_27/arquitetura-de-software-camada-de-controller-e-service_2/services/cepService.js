const cepModel = require('../models/cepModel');

const verifyCEP = async (cep) => {
  const [response] = await cepModel.getCEP(cep);

  if (!response)
    return { code: 'notFound', message: 'CEP não encontrado', type: 404 };

  return {
    response,
    type: 200,
  };
};

module.exports = {
  verifyCEP,
};
