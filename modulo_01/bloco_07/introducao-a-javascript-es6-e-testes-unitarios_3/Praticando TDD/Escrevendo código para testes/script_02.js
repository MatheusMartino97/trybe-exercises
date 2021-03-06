// Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = arrayOfWords => {
    const wordLengthsArray = []

    for (let word of arrayOfWords) {
        wordLengthsArray.push(word.length)
    }

    return wordLengthsArray
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);