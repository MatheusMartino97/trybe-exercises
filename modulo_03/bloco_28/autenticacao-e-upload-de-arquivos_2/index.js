require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser').json();
const multer = require('multer');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads');
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(bodyParser);

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'PONG!' });
});

app.post('/upload', [
  upload.single('file'),
  (req, file, cd) => {
    const files = fs.readdirSync(`${__dirname}/uploads`);
    const isDuplicated = files.some((dirfile) => dirfile.includes(file.req.file.originalname))

    console.log(isDuplicated)

  },
]);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
