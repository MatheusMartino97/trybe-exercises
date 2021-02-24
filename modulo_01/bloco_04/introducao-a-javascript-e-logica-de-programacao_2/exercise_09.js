/**
 * Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:
 *
 * let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 *
 * 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
 */

function makeArrayXtoY(x, y) {
  let array = [];

  if (x <= y) {
    for (let i = x; i <= y; i++) {
      array.push(i);
    }
  } else if (y < x) {
    for (let i = x; i >= y; i--) {
      array.push(i);
    }
  }
  return array;
}

let array1to25 = makeArrayXtoY(1, 25);

function arrayDivideByN (array, n) {
  let result = []

  for (let i in array) {
    result.push(array[i] / n)
  }
  console.log(result)
}

arrayDivideByN(array1to25, 2)