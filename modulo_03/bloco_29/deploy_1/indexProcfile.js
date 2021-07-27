require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.status(200).send(process.env.MESSAGE)
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
