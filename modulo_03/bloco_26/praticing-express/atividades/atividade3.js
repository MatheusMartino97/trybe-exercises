// Rotas: /posts/:id e /posts
// Objetivo: Deve receber uma requisição com o param id e verificar a existência do post com aquele id . Caso exista, retorne os dados daquele post. Caso não exista, retorne um status de erro com a mensagem id not found. . A rota /posts deve trazer todos os posts cadastrados.
const express = require('express');
const rescue = require('express-rescue');
const getPosts = require('../services/posts-utils');

const router = express.Router();

router.get(
  '/',
  rescue(async (_req, res) => {
    const posts = await getPosts();

    res.status(200).send(posts);
  })
);

router.post(
  '/:id',
  rescue(async (req, res) => {
    const { id: paramId } = req.params;
    const postsList = await getPosts();

    const post = postsList.find(({ id }) => id == paramId);

    console.log(postsList)
    
    if (!post) return res.status(404).json({ message: 'id not found' })

    res.status(200).json(post)
  })
);

module.exports = router;
