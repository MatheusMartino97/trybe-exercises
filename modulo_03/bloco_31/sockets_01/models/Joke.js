const axios = require('axios')

const getJoke = async (url) => {
  const joke  = await axios(url).then(({ data }) => data.joke)

  return joke;
}

module.exports = {
  getJoke,
}