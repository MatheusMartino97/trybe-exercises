// Rota: /comments
// Objetivo: Deve retornar todos os comentários. Se houver um query param filter na requisição, deve retornar apenas os comentários que incluem o filtro.

const express = require('express');
const rescue = require('express-rescue');
const getUsers = require('../services/users-utils');

const router = express.Router();

router.get(
  '/',
  rescue(async (req, res) => {
    const usersList = await getUsers();
    const { filter } = req.query;

    const comments = usersList
      .map(({ comments }) => comments)
      .reduce((acc, current) => {
        return [...acc, ...current]
      }, [])

    if (filter) {
      const filteredComments = comments.filter((comment) => comment.toLowerCase().includes(filter.toLowerCase()))

      return res.status(200).json(filteredComments)
    }

    res.status(200).json(comments)
  })
);

module.exports = router;
