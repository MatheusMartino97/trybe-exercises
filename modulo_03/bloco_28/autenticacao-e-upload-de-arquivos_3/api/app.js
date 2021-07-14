const express = require('express');
const bodyParser = require('body-parser').json();

const app = express();

app.use(bodyParser);



module.exports = app;
