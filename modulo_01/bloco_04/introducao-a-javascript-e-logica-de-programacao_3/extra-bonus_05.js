// Bonus 05 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n
// será sempre ímpar:

function hollowPyramid(base, char1, char2, short) {
  let n = Math.abs(base);
  if (n % 2 === 0) {
    n += 1;
  }

  let line;
  let size = 1;
  let side = "";
  let middle = "";
  let sideSize = (n - 1) / 2;

  if (short === "short") {
    size = 2;
  }

  for (let i = 1; i <= n; i += size) {
    line = "";

    if (i % 2 !== 0) {
      if (i === 1) {
        for (sideIndex = sideSize; sideIndex > 0; sideIndex--) {
          side += char2;
        }
        line = side + char1 + side;
        console.log(line);
        middle += char2;
        side = side.substr(0, side.length - 1);
      } else if (i === n) {
        for (let baseIndex = 0; baseIndex < n; baseIndex++) {
          line += char1;
        }
        console.log(line);
      } else {
        line = side + char1 + middle + char1 + side;
        console.log(line);
        middle += char2 + char2;
        side = side.substr(0, side.length - 1);
      }
    }

    if (i % 2 === 0) {
      for (let lineIndex = 0; lineIndex < n; lineIndex++) {
        line += char2;
      }
      console.log(line);
    }
  }
}

hollowPyramid(7, "*", " ", "short");

// (Opcional) Adicione " 'short' " como quarto parâmetro da função para obter um triangulo mais compacto
// Note que você pode mudar o tamanho da arvore assim como os caracteres que a compoem.
// Note também que a função funciona mesmo com números negativos e números pares.
