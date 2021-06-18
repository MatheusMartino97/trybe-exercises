const { questionInt, question } = require('readline-sync');

const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');

const scripts = {
  1: 'imc',
  2: 'velocidade',
  3: 'sorteio',
};

function chooseScript() {
  console.log(scripts);
  const script = questionInt('Escolha um script');

  runScript(script)
}

function runScript(script) {
  switch (script) {
    case 1:
      imc();
      break;

    case 2:
      velocidade();
      break;

    default:
      sorteio();
      break;
  }

  askPlayAgain()
}


function askPlayAgain() {
  const playAgain = question('Quer rodar outro sript?');
  
  if (playAgain === 'sim') {
    chooseScript()
  }
}

chooseScript();
