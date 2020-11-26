/**
 * Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:
 *
 * let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 *
 * Bonus 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function sort(array) {
  const times = array.length;
  let reversed = [];

  for (let j = 1; j < times; j++) {
    for (let i = 0; i < times - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  for (let i in numbers) {
    reversed.unshift(numbers[i]);
  }
  console.log(reversed);
}

sort(numbers);
