const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT;



app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});