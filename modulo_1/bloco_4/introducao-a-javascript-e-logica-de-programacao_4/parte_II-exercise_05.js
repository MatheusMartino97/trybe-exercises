// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function moreRepeats(array) {
  let currentNumberOfTimes;
  let currentMostRepeated;
  let mostAparisons = 0;

  for (let i in array) {
    currentNumberOfTimes = 0;

    for (let j in array) {
      if (array[i] === array[j]) {
        currentNumberOfTimes++;
      }
    }

    if (currentNumberOfTimes > mostAparisons) {
      currentMostRepeated = array[i];
      mostAparisons = currentNumberOfTimes;
    }
  }
  console.log(currentMostRepeated);
}

moreRepeats([2, 3, 2, 5, 8, 2, 3]);
