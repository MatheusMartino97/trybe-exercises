const fs = require('fs/promises');

const getBoolUsers = async () => {
  const fileContent = await fs.readFile('./data/boolUsers.json', 'utf-8');

  return JSON.parse(fileContent);
};

const setBoolUsers = async (boolUsers) => {
  const newContent = JSON.stringify(boolUsers);

  await fs.writeFile('./data/boolUsers.json', newContent);
};

module.exports = {
  getBoolUsers,
  setBoolUsers,
};
