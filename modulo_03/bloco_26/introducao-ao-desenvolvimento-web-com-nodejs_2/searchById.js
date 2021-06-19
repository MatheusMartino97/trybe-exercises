const { read } = require('fs');
const fs = require('fs/promises');
const readline = require('readline-sync');

const simpsonsList = fs.readFile('./simpsons.json', 'utf-8').then((data) => {
  return JSON.parse(data);
});

async function searchById(param) {
  const arrayOfSimpsons = await simpsonsList;

  const result = arrayOfSimpsons.find(({ id, name }) => {
    const formatedParam = param.toString();
    return (
      id === formatedParam ||
      name.toLowerCase().includes(formatedParam.toLowerCase())
    );
  });

  console.log(result);
}

const inputParam = readline.question('Busque um Simpson por Id ou por nome: ');

searchById(inputParam);
