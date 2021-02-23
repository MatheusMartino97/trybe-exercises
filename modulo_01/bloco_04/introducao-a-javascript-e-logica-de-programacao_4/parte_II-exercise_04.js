// 4 -  Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function longestName(array) {
  let currentLongest = array[0];

  for (let index in array) {
    if (array[index].length > currentLongest.length) {
      currentLongest = array[index];
    }
  }
  console.log(currentLongest);
}

longestName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]);
