const express = require('express');
const cepService = require('../services/cepService');
const { validateCEP } = require('../middlewares');

const router = express.Router();

router.get('/:cep', [
  validateCEP,
  async (req, res, next) => {
    const { cep } = req.params;
    const { response, type, code, message } = await cepService.verifyCEP(cep);

    if (code) return next({ type, message });

    return res.status(type).json(response);
  },
]);

module.exports = router;
