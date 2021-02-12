// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somaGauss(n) {
  sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

somaGauss(5);
