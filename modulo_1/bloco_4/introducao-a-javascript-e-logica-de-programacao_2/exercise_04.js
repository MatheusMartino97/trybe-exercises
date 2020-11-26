/**
 * Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:
 *
 * let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 *
 * 4 - Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function arrayAverage(array) {
  let sum = 0;
  let average;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  average = sum / array.length;

  if (average > 20) {
    console.log("Valor maior que 20");
  } else {
    console.log("Valor menor ou igual a 20");
  }
}

arrayAverage(numbers);
