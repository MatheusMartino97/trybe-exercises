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

// Ao invés de criar uma array específica, criei uma função que retorna arrays com quaisquer que forem os parâmetros desejados.
// Note que a função também funciona se o primeiro número for igual ao segundo e se o objetivo for criar um array decrescente.
// 
// Exemplos:
// makeArrayXtoY(6, 47); Cria uma array que vai de 6 até 47 e loga no console.
// makeArrayXtoY(7, 0); Cria uma array que vai de 7 até 0 e loga no console.
// makeArrayXtoY(8, 8); Cria uma array que contem o número 8 e loga no console.
