// Rota: /recipe/:id/ingredients
// Objetivo: Deve receber uma requisição com os campos remove e/ou insert . O valor deve ser um array de ingredientes para remover ou adicionar na receita correspondente. Caso o id fornecido não exista, retorne um erro recipe not found .

const express = require('express');
const rescue = require('express-rescue');
const { getRecipes, setRecipes } = require('../services/recipes-utils');

const router = express.Router();

router.get(
  '/:id/ingredientes',
  rescue(async (req, res) => {
    const { id: paramId } = req.params;
    const { remove, insert } = req.body;

    const recipesList = await getRecipes();

    const filtredRecipes = recipesList.filter(
      ({ id }) => id !== JSON.parse(paramId)
    );

    const selectedRecipe = recipesList.find(
      ({ id }) => id === JSON.parse(paramId)
    );

    const currentIngredients = selectedRecipe.ingredientes;

    // inserting items
    if (insert) {
      insert.forEach((item) => currentIngredients.push(item));
    }

    // removing values
    if (remove) {
      const result = currentIngredients.filter(
        (item) => !remove.includes(item)
      );

      await setRecipes([
        ...filtredRecipes,
        {
          ...selectedRecipe,
          ingredientes: result,
        },
      ]);

      return res.status(200).json({ message: 'ingredientes atualizados' });
    }

    await setRecipes([
      ...filtredRecipes,
      { ...selectedRecipe, ingredientes: currentIngredients },
    ]);

    res.status(200).json({ message: 'ingredientes atualizados' });
  })
);

module.exports = router;
