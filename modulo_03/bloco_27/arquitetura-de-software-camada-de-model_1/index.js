const express = require('express');
const bodyParser = require('body-parser');
const User = require('./model/User');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/user', async (_req, res) => {
  const users = await User.getAll()

  res.status(200).json(users)
})

// app.get('/user/:id', async (req, res) => {
//   const { id } = req.params

//   const user = await User.getById(id)

//   res.status(200).json(user)
// })

// app.post('/user', async (req, res) => {
//   const { firstName, lastName, email, password } = req.body
//   const insertedUser = await User.create(firstName, lastName, email, password)

//   const { password: pw, ...user } = insertedUser

//   res.status(201).json(user)
// })

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
