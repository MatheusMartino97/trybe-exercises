const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

const {
  atividade1,
  atividade2,
  atividade3,
  atividade4,
  atividade5,
  atividade6,
  atividade7,
  atividade8,
  atividade9,
  atividade10,
} = require('./atividades');

app.use(bodyParser.json());

app.use('/login', atividade1);
app.use('/btc', atividade2);
app.use('/posts', atividade3);
app.use('/users', atividade4);
app.use('/', atividade5);
app.use('/recipes', atividade6, atividade7);
app.use('/comments', atividade8);
app.use('/user', atividade9);
app.use('/recipe', atividade10);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
