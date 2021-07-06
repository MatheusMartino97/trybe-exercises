const { isParamMissing, returnParamMissingObject } = require('../schemas');

module.exports = (req, _res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const type = 400;
  const cepRegex = /\d{5}-?\d{3}/;

  if (!cep.match(cepRegex))
    return next({ type, message: 'Formato do CEP inválido.' });

  switch (true) {
    case isParamMissing(cep):
      return next(returnParamMissingObject(type, 'cep'));

    case isParamMissing(logradouro):
      return next(returnParamMissingObject(type, 'logradouro'));

    case isParamMissing(bairro):
      return next(returnParamMissingObject(type, 'bairro'));

    case isParamMissing(localidade):
      return next(returnParamMissingObject(type, 'localidade'));

    case isParamMissing(uf):
      return next(returnParamMissingObject(type, 'uf'));

    default:
      return next();
  }
};
