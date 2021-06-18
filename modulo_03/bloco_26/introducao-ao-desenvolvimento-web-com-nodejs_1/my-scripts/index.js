const { questionInt, question } = require('readline-sync');

const imc = require('./scripts/imc');
const velocidade = require('./scripts/velocidade');
const sorteio = require('./scripts/sorteio');
const fatorial = require('./scripts/fatorial');
const fibonacci = require('./scripts/fibonacci');

const scripts = {
  1: 'imc',
  2: 'velocidade',
  3: 'sorteio',
  4: 'fatorial',
  5: 'fibonacci',
};

function chooseScript() {
  console.log(scripts);
  const script = questionInt('Escolha um script: ');

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

    case 3:
      console.log(`Você escolheu o script ${scripts[script].toUpperCase()}`);
      sorteio();
      break;

    case 4:
      console.log(`Você escolheu o script ${scripts[script].toUpperCase()}`);
      fatorial();
      break;

    case 5:
      console.log(`Você escolheu o script ${scripts[script].toUpperCase()}`);
      fibonacci();
      break;
  }

  askPlayAgain();
}

function askPlayAgain() {
  const playAgain = question('Quer rodar outro sript?: ');

  if (playAgain === 'sim') {
    chooseScript();
  }
}

chooseScript();
