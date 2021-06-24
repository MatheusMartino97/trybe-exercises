// Rota: /user/:name
// Objetivo: Deve validar se o usuário existe e, caso exista, deve retornar os comentários feitos por ele. Caso não exista, deve retornar um status de erro com uma mensagem user not found.

const express = require('express');
const rescue = require('express-rescue');
const getUsers = require('../services/users-utils');

const router = express.Router();

router.get(
  '/:name',
  rescue(async (req, res) => {
    const { name } = req.params;
    const usersList = await getUsers();

    const user = usersList.find(({ user }) => user === name)

    if (!user) return res.status(404).json({ message: 'user not found' })

    res.status(200).send(user)
  })
);

module.exports = router