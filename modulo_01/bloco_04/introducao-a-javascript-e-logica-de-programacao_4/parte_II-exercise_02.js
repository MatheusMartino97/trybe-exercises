// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indexOfGreater(array) {
  let greaterIndex;
  let currentGreater = array[0];

  for (let index in array) {
    if (array[index] > currentGreater) {
      currentGreater = array[index];
      greaterIndex = index;
    }
  }
  console.log(greaterIndex);
}

indexOfGreater([2, 3, 6, 7, 10, 1]);
