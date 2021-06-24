const axios = require('axios');

module.exports = async () => {
  const { data } = await axios
    .get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')

  return data
};
