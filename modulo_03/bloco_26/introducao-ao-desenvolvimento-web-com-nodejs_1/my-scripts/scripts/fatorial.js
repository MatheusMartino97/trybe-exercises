module.exports = () => {
  const { questionInt } = require('readline-sync');

  const number = questionInt(
    'Escolha um número para retornar o seu fatorial: '
  );

  function getFactorial(number) {
    let accumulator;

    if (number === 0) {
      accumulator = 1
    } else {
      accumulator = 1
      
      for (let i = number; i > 1; i -= 1) {
        accumulator *= i;
      }
    }

    console.log(`O fatorial de ${number} é ${accumulator}.`);
  }

  getFactorial(number);
};
