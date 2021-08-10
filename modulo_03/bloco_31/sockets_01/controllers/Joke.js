const rescue = require('express-rescue');
const Joke = require('../models/Joke')

const getJoke = rescue(async (_req, res) => {
  const joke = await Joke.getJoke('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')

  return res.render('Joke', { joke } )
});

module.exports = {
  getJoke,
}