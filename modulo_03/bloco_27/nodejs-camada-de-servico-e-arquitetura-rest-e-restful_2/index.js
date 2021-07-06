const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const { pingController, cepController } = require('./controllers');
const { validateCEP, handleError } = require('./middlewares');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());


app.use('/ping', pingController);
app.use('/cep', cepController);
app.use('/', handleError);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
