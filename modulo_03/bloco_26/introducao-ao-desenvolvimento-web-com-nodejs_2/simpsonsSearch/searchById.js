module.exports = () => {
  const fs = require('fs/promises');
  const readline = require('readline-sync');

  const simpsonsList = fs.readFile('./simpsons.json', 'utf-8').then((data) => {
    return JSON.parse(data);
  });

  async function searchById(param) {
    const list = await simpsonsList.then((data) => data);
    const stringParam = param.toString();

    return new Promise((resolve, reject) => {
      const result = list.filter(
        ({ id, name }) =>
          id === stringParam ||
          name.toLowerCase().includes(stringParam.toLowerCase())
      );

      if (result.length) resolve(result);

      reject(new Error('Simpson não encontrado'));
    });
  }

  const inputParam = readline.question(
    'Procure um simpson por Id ou por nome: '
  );

  searchById(inputParam)
    .then((simpson) => console.log(simpson))
    .catch((err) => console.error(err.message));
};
