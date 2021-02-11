/**
 * Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:
 *
 * let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 *
 * 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function howManyOdds (array) {
  let numberOfOdds = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      numberOfOdds++
    } 
  }

  if (numberOfOdds === 0) {
    console.log('Nenhum valor ímpar encontrado')
  } else {
    console.log(numberOfOdds)
  }
}

howManyOdds(numbers)