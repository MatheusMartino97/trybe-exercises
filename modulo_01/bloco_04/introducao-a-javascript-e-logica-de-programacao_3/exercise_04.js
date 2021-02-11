// 4 - Depois, faça uma pirâmide com n asteriscos de base

function invertTriangle(n, char1, char2) {
  let spaces;
  let stars;
  let line;

  for (let i = 1; i <= n; i += 2) {
    if (n % 2 === 0) {
      spaces = char1;
      stars = char2;
    } else {
      spaces = "";
      stars = "";
    }

    for (let numOfSpaces = n - i; numOfSpaces > 0; numOfSpaces -= 2) {
      spaces += char1;
    }

    for (let numOfStars = 1; numOfStars <= i; numOfStars++) {
      stars += char2;
    }
    line = spaces + stars + spaces;
    console.log(line);
  }
}

invertTriangle(7, " ", "o");

// Você pode escolher quais caracteres farão parte da pirâmide
// Note que a função também funciona se a base for um número par
