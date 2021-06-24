// Rota: /recipe/:id
// Objetivo: Deve receber uma requisição com name e ingredientes de uma receita, e substituir no banco de dados a receita que possua o id passado na requisição. Caso o id fornecido não exista, retorne um erro recipe not found.

const express = require('express');
const rescue = require('express-rescue');
const { getRecipes, setRecipes } = require('../services/recipes-utils');

const router = express.Router();

router.post(
  '/:id',
  rescue(async (req, res) => {
    const { id: paramId } = req.params;
    const { ingredientes } = req.body;
    const recipesList = await getRecipes()

    const filteredRecipes = recipesList.filter(({ id }) => id !== parseInt(paramId))
    const recipe = recipesList.find(({ id }) => id === parseInt(paramId))
    const newRecipe = {
      ...recipe,
      ingredientes
    }

    if (!recipe) return res.status(404).json({ message: 'id not found' })

    await setRecipes([...filteredRecipes, newRecipe])

    return res.status(200).json({ adicionandos: ingredientes })
  })
);

module.exports = router;
