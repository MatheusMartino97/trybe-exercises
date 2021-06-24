const fs = require('fs/promises');

module.exports = async () => {
  const fileContent = await fs.readFile('./data/users.json');

  return JSON.parse(fileContent);
};
