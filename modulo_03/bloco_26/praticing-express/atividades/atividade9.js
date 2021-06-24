// Rota: /user/:id
// Objetivo: Deve receber no campo status um boleano e alterar o status do usuário correspôndente. Se o campo status não for um boleano, deve retornar o error "status isn't a boolean". Caso nao exista usuário correspondente, deve rotornar o error "user isn't found".

const express = require('express');
const rescue = require('express-rescue');
const { getBoolUsers, setBoolUsers } = require('../services/boolUsers-utils');

const router = express.Router();

router.post(
  '/:id',
  rescue(async (req, res) => {
    const { id: paramId } = req.params;
    const { status } = req.body;

    const usersList = await getBoolUsers();
    const selectedUser = usersList.find(({ id }) => id === parseInt(paramId));
    const filteredList = usersList.filter(({ id }) => id !== parseInt(paramId));

    if (typeof status !== 'boolean')
      return res.status(400).json({ message: "status isn't a boolean" });

    if (!selectedUser)
      return res.status(404).json({ message: "user isn't found" });

    const updatedUser = {
      ...selectedUser,
      status
    }

    await setBoolUsers([...filteredList, updatedUser])

    res.status(200).end()
  })
);

module.exports = router;
