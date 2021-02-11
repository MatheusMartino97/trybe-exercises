// Bonus 06 - Faça um programa que diz se um número definido numa variável é primo ou não.

function isPrime(n) {
  let quantityOfDividers = 0;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      quantityOfDividers += 1;
    }
  }
  if (quantityOfDividers === 0) {
    console.log("É primo");
  } else {
    console.log("Não é primo");
  }
}

isPrime(5);
