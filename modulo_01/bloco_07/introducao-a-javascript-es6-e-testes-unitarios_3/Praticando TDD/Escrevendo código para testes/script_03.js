// Escreva a função sumAllNumbers para passar nos testes já implementados.

const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = arrayOfNumbers => {
    let totalSum = 0

    for (let number of arrayOfNumbers) {
        totalSum += number
    }

    return totalSum
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);