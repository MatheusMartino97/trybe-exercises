/**
 * Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:
 *
 * let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 *
 * 2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function arraySum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum)
}

arraySum(numbers)
