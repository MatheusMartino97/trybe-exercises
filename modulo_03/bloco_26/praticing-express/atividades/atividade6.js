// Rota: /recipe/:id
// Objetivo: Deletar a receita no banco de dados e retornar a receita deletada. Caso o id fornecido não exista, retorne um erro recipe not found .
// Use o array abaixo para simular o banco de dados:

const express = require('express');
const rescue = require('express-rescue');
const { getRecipes, setRecipes } = require('../services/recipes-utils');

const router = express.Router();

router.post(
  '/:id',
  rescue(async (req, res, next) => {
    const { id: paramId } = req.params;
    const { ingredientes } = req.body

    const recipes = await getRecipes();

    const filteredRecipes = recipes.filter(
      ({ id }) => id !== parseInt(paramId)
    );

    const deletedRecipe = recipes.find(({ id }) => id === parseInt(paramId));

    if (!deletedRecipe) return res.status(404).json({ message: 'id not found' })

    if (!ingredientes) {
      
      await setRecipes(filteredRecipes);
      
      return res.status(200).json({ deleted: deletedRecipe })
    }

    next()
  })
);

module.exports = router;
