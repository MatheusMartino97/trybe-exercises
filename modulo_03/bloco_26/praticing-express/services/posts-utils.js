const fs = require('fs/promises');

const getPosts = async () => {
  const fileContent = await fs.readFile('./data/posts.json', 'utf-8');
  
  return JSON.parse(fileContent);
};

module.exports = getPosts;
