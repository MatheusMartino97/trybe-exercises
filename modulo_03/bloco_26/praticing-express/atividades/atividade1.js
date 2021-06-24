// Rota: /login
// Objetivo: Receber uma requisição que envie email/senha e receba um token como resposta. O formato desse token deve ser uma string aleatória com 12 caracteres. O email recebido deve ter o formato email@mail.com e a senha deve conter no mínimo 4 caracteres e no máximo 8, todos números. Caso algum desses campos seja enviado em formato incorreto, deve-se retornar uma mensagem de erro email or password is incorrect. e seu devido status code.

const express = require('express');
const generateToken = require('../generateToken');

const router = express.Router();


router.post('/', (req, res) => {
  const { email, senha } = req.body;

  const isEmailValid = email.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const isPasswordValid =
    (senha.length >= 4 && senha.length <= 8) &&
    typeof parseInt(senha) === 'number';

  if (!isEmailValid || !isPasswordValid) {
    return res.status(401).json({ message: 'email or password is incorrect.' })
  }

  res.status(200).json({ token: generateToken() })
});

module.exports = router;