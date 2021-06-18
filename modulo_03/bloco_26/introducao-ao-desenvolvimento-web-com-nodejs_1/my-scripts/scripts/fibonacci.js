module.exports = () => {
  const { questionInt } = require('readline-sync');

  const length = questionInt(
    'Escolha quantos números da sequência de Fibonacci devem ser retornados: '
  );

  function getFibonacci(length) {
    const numbers = [0, 1];

    for (let i = 2; i < length; i++) {
      const nextNumber = numbers[i - 2] + numbers[i - 1]

      numbers.push(nextNumber)
    }

    console(numbers)
  }

  getFibonacci(length)
}