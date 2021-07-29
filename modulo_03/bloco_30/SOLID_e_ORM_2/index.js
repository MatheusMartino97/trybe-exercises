require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser').json();
const { Book } = require('./models')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser);

app.get('/books', async (_req, res) => {
  const books = await Book.findAll();

  return res.status(200).json(books)
})

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
