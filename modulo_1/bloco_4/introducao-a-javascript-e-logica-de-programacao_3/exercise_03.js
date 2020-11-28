// 3 - Agora inverta o lado do triângulo

function invertTriangle(n, char1, char2) {
  let spaces;
  let stars;
  let line;

  for (let i = 1; i <= n; i++) {
    spaces = "";
    stars = "";

    for (let numOfSpaces = n - i; numOfSpaces > 0; numOfSpaces--) {
      spaces += char1;
    }

    for (let numOfStars = 1; numOfStars <= i; numOfStars++) {
      stars += char2;
    }
    line = spaces + stars;
    console.log(line);
  }
}

invertTriangle(5, ' ', '*');

// Você pode selecionar quais characteres farão parte do triangulo