const fs = require('fs');

const numerosNaturais = (number) => {
  if (typeof number !== 'number') return 'o valor deve ser um numero';
  if (number > 0) return 'positivo';
  if (number < 0) return 'negativo';

  return 'neutro';
};

const writeFile = (file, content) => {
  fs.writeFileSync(file, content);

  return 'ok'
};

module.exports = {
  numerosNaturais,
  writeFile,
};
