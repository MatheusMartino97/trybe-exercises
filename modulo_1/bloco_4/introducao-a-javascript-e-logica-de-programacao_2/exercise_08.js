/**
 * Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:
 *
 * let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 *
 * 8 - Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
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
  console.log(array);
}

makeArrayXtoY(1, 25);
