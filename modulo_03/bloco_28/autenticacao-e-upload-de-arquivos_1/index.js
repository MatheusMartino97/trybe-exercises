require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser').json();
const { usersRoutes, loginRoutes } = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser);

app.use('/users', usersRoutes)
app.use('/login', loginRoutes);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
