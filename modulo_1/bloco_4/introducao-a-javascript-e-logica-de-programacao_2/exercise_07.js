/**
 * Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:
 *
 * let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 *
 * 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function arraySmallestValue (array) {
  let smallestNumber = array[0]

  for (let i = 0; i < array.length; i++) {

    if (array[i] < smallestNumber) {
      smallestNumber = array[i]
    }
  }
  console.log(smallestNumber)
}

arraySmallestValue(numbers)