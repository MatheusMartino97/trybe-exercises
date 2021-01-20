// Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui

  const flat = arrays.reduce((acc, array) => {
    return acc.concat(array);
  });

  return flat;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
