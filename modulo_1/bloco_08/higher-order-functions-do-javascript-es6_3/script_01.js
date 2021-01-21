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

// console.log(flatten())

function flatten2() {
  const flatArray = [];

  arrays.forEach((array) => {
    flatArray.push(...array);
  });

  return flatArray;
}

// console.log(flatten2());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
