const fs = require('fs/promises');

module.exports = async () => {
  const fileContent = await fs.readFile('./data/posts.json', 'utf-8');
  
  return JSON.parse(fileContent);
};
