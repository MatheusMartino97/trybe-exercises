const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const app = express();

const { getSimpsons, setSimpsons } = require('./fs.utils');
const authMiddleware = require('./authMiddleware');
const generateToken = require('./generateToken')

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  const token = generateToken()

  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ mmessage: 'missing fields' })
  }

  res.status(200).json({ token })
});

app.use(authMiddleware);

app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).json({ message: `Hello, ${name}!` });

  res.status(401).json({ message: 'Unauthorized!' });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade!` });
});

app.get(
  '/simpsons',
  rescue(async (_req, res) => {
    const simpsonsList = await getSimpsons();

    res.status(200).send(simpsonsList);
  })
);

app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsonsList = await getSimpsons();
    const { id } = req.params;

    const simpsonById = simpsonsList.find((simpson) => id === simpson.id);

    if (!simpsonById) {
      return res.status(404).json({ message: 'Simpson not found!' });
    }

    res.status(200).send(simpsonById);
  })
);

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const simpsonsList = await getSimpsons();
    const { id, name } = req.body;

    if (simpsonsList.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    setSimpsons([...simpsonsList, { id, name }]);

    res.status(204).end();
  })
);

app.listen(3000, () => {
  console.log('O app está ouvindo a porta 3000');
});
