module.exports = () => {
  const { questionInt, question } = require('readline-sync');

  function wannaPlayAgain() {
    const playAgain = question('Quer jogar de novo? ');

    if (playAgain === 'sim') {
      askTheGuess();
    }
  }

  function generateRandomNumber() {
    return Math.round(Math.random() * 10);
  }

  function askTheGuess() {
    const guessedNumber = questionInt('Adivinhe o número: ');

    if (guessedNumber === generateRandomNumber()) {
      console.log('Acertou');
    } else {
      console.log('Errou');
    }

    wannaPlayAgain();
  }

  askTheGuess();
};
