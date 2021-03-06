const fs = require('fs/promises');

const getRecipes = async () => {
  const fileContent = await fs.readFile('./data/recipes.json', 'utf-8');

  return JSON.parse(fileContent);
};

const setRecipes = async (recipes) => {
  const newContent = JSON.stringify(recipes);

  await fs.writeFile('./data/recipes.json', newContent);
};

module.exports = {
  getRecipes,
  setRecipes,
};
