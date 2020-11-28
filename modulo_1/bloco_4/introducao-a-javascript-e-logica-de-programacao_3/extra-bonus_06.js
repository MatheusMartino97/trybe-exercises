// Bonus 06 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n
// será sempre ímpar:

function hollowPyramid(n, char1, char2) {
  let side = "";
  let middle = "";
  let line;
  let sideSize = (n - 1) / 2;

  for (let i = 1; i <= n; i++) {
    line = "";

    if (i === 1) {
      for (sideIndex = sideSize; sideIndex > 0; sideIndex--) {
        side += char2;
      }
      line = side + char1 + side;
      console.log(line);
      middle += char2;
      side = side.substr(0, side.length - 1);
    }

    if (i % 2 === 0) {
      for (let lineIndex = 0; lineIndex < n; lineIndex++) {
        line += char2;
      }
      console.log(line);
    }

    if (i % 2 !== 0 && i !== n && i !== 1) {
      line = side + char1 + middle + char1 + side;
      console.log(line);
      middle += char2 + char2;
      side = side.substr(0, side.length - 1);
    }

    if (i === n) {
      for (let baseIndex = 0; baseIndex < n; baseIndex++) {
        line += char1;
      }
      console.log(line);
    }
  }
}

hollowPyramid(5, "*", " ");

// Note que você pode mudar o tamanho da arvore assim como os caracteres que a compoe