// Rota: /recipe/:id
// Objetivo: Deletar a receita no banco de dados e retornar a receita deletada. Caso o id fornecido não exista, retorne um erro recipe not found .
// Use o array abaixo para simular o banco de dados:

const express = require('express');
const rescue = require('express-rescue');
const { getRecipes, setRecipes } = require('../services/recipes-utils');

const router = express.Router();

router.post(
  '/:id',
  rescue(async (req, res) => {
    const { id: paramId } = req.params;
    const recipes = await getRecipes();

    const filteredRecipes = recipes.filter(
      ({ id }) => id !== parseInt(paramId)
    );

    if (!filteredRecipes.length) return res.status(404).json({ message: 'id not found' })

    const deletedRecipe = recipes.find(({ id }) => id === parseInt(paramId));

    await setRecipes(filteredRecipes);

    res.status(200).json({ deleted: deletedRecipe })
  })
);

module.exports = router;
