require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser').json();
const { loginRoutes } = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser);

app.use('/login', loginRoutes);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
