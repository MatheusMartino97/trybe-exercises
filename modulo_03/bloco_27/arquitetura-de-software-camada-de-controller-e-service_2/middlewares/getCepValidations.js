module.exports = (req, _res, next) => {
  const { cep } = req.params;
  const cepRegex = /\d{5}-?\d{3}/;

  if (!cep.match(cepRegex))
    return next({ code: 'invalidData', message: 'CEP invalido', type: 400 });

  return next();
};
