// 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos
// de base.

function triangle(n) {
  let line = "";

  for (let i = 0; i < n; i++) {
    line += "*";
    console.log(line);
  }
}

triangle(5);
