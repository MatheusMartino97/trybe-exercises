// Rota: /:operacao/:numero1/:numero2
// Objetivo: Deve validar a operação e retornar o resultado da mesma. As operações podem ser soma , subtração , divisão ou multiplicação . Regra: Um middleware deve ser usado para cada operação. A operação deve ser recebida como parâmetro na rota.

const express = require('express');
const router = express.Router();

router.post('/:operacao/:numero1/:numero2', [
  (req, res, next) => {
    const { operacao, numero1, numero2 } = req.params;
    const result = parseFloat(numero1) + parseFloat(numero2);

    if (operacao === 'adicao') return res.status(200).json({ result });

    next();
  },
  (req, res, next) => {
    const { operacao, numero1, numero2 } = req.params;
    const result = parseFloat(numero1) - parseFloat(numero2);

    if (operacao === 'subtracao') return res.status(200).json({ result });

    next();
  },
  (req, res, next) => {
    const { operacao, numero1, numero2 } = req.params;
    const result = parseFloat(numero1) * parseFloat(numero2);

    if (operacao === 'multiplicacao') return res.status(200).json({ result });

    next();
  },
  (req, res) => {
    const { operacao, numero1, numero2 } = req.params;

    if (operacao === 'divisao' && parseFloat(numero2) !== 0) {
      const result = parseFloat(numero1) / parseFloat(numero2);

      return res.status(200).json({ result });
    }

    res.status(401).json({ message: 'Não se pode dividir por 0.' });
  },
]);

module.exports = router;
