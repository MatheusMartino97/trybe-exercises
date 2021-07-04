const express = require('express');
const cepService = require('../services/cepService');
const { getCepValidations, postCepValidations } = require('../middlewares');

const router = express.Router();

router.get('/:cep', [
  getCepValidations,
  async (req, res, next) => {
    const { cep } = req.params;
    const { response, type, code, message } = await cepService.verifyCEP(cep);

    if (code) return next({ type, message });

    return res.status(type).json(response);
  },
]);

router.post('/', [
  postCepValidations,
  async (req, res, next) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    await cepService
      .verifyCEPInfos(cep, logradouro, bairro, localidade, uf)
      .then((response) => res.status(200).json(response))
      .catch((err) => next({ type: 400, message: err.message }));
  },
]);

module.exports = router;
