// Rota: /btc/price
// Objetivo: Receber uma requisição com um token e verificar se ele está correto. O formato do token deve ser uma string de 12 caracteres contendo letras e números. Caso o formato do token esteja incorreto, devolva o erro como resposta invalid token. . Caso o formato do token esteja correto, faça um fetch em uma API externa de sua preferencia e retorne os dados da API como resposta. (sugestão de API: https://api.coindesk.com/v1/bpi/currentprice/BTC.json ) O token será passado pelo header da seguinte forma: Authorization: asd65asd5sd8

const express = require('express');
const rescue = require('express-rescue');
const router = express.Router();

const getCurrentPrice = require('../services/currentPrice');

router.post(
  '/price',
  rescue(async (req, res) => {
    const { authorization } = req.headers;
    const isTokenValid = authorization.match(/^(\d|\w){12}$/gm);
    const btcInfo = await getCurrentPrice();

    const {
      bpi: {
        USD: { rate_float },
      },
    } = btcInfo;
    const currencyRate = Math.round(rate_float * 100) / 100;
    const rateSplit = currencyRate.toString().split('');
    const [a, b, ...rest] = rateSplit;
    const formatedRate = [a, b, ',', rest.join('')].join('')

    if (isTokenValid) {
      return res
        .status(200)
        .send(`A cotação do btc está em $${formatedRate} dólares`);
      // return res.status(200).send(btcInfo);
    }
    res.status(401).json({ message: 'invalid token' });
  })
);

module.exports = router;
