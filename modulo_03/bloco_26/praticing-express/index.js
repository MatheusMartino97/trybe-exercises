const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

const atividade1 = require('./atividades/atividade1');
const atividade2 = require('./atividades/atividade2');
const atividade3 = require('./atividades/atividade3');
const atividade4 = require('./atividades/atividade4');
const atividade6 = require('./atividades/atividade6');

app.use(bodyParser.json());

app.use('/login', atividade1);
app.use('/btc', atividade2);
app.use('/posts', atividade3);
app.use('/users', atividade4);
app.use('/recipes', atividade6)

// Aividade 5
app.post('/:operacao/:numero1/:numero2', [
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

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
