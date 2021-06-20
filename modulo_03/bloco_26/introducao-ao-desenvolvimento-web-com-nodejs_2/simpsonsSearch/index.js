const readline = require('readline-sync');

const list = require('./list');
const searchById = require('./searchById');

function manageScripts() {
  const scripts = {
    1: 'list',
    2: 'searchById',
  };

  console.log(scripts);

  const scriptToBeRun = readline.question('Qual script deseja executar? ');

  switch (scriptToBeRun) {
    case '1':
      list();
      break;

    case '2':
      searchById();
      break;

    default:
      break;
  }
}

manageScripts();
