const { questionInt, question } = require('readline-sync');

const imc = require('./scripts/imc');
const velocidade = require('./scripts/velocidade');
const sorteio = require('./scripts/sorteio');

const scripts = {
  1: 'imc',
  2: 'velocidade',
  3: 'sorteio',
};

function chooseScript() {
  console.log(scripts);
  const script = questionInt('Escolha um script');

  runScript(script);
}

function runScript(script) {
  switch (script) {
    case 1:
      console.log(`Você escolheu o script ${scripts[script].toUpperCase()}`);
      imc();
      break;

    case 2:
      console.log(`Você escolheu o script ${scripts[script].toUpperCase()}`);
      velocidade();
      break;

    default:
      console.log(`Você escolheu o script ${scripts[script].toUpperCase()}`);
      sorteio();
      break;
  }

  askPlayAgain();
}

function askPlayAgain() {
  const playAgain = question('Quer rodar outro sript?');

  if (playAgain === 'sim') {
    chooseScript();
  }
}

chooseScript();
