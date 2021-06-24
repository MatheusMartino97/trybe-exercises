const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3002;

const atividade1 = require('./atividades/atividade1');
const atividade2 = require('./atividades/atividade2');
const atividade3 = require('./atividades/atividade3');

app.use(bodyParser.json());

app.use('/login', atividade1);
app.use('/btc', atividade2);
app.use('/posts', atividade3)

app.listen(PORT, () => {
  console.log(`Listen to port ${PORT}`);
});
