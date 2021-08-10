require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser').json();
const Joke = require('./controllers/Joke')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser);

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/joke', Joke.getJoke)

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
