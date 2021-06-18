module.exports = () => {
  const { questionInt } = require('readline-sync');

  const length = questionInt(
    'Escolha quantos números da sequência de Fibonacci devem ser retornados: '
  );

  function getFibonacci(length) {
    let numbers = [1, 1];

    if (length > 2) {
      for (let i = 2; i < length; i++) {
        const nextNumber = numbers[i - 2] + numbers[i - 1]
  
        numbers.push(nextNumber)
      }
    } else {
      numbers = numbers.slice(0, length)
    }

    console.log(numbers)
  }

  getFibonacci(length)
}