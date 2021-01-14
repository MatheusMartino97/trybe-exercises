
// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
const testingScope = escopo => { 
    if (escopo === true) { 
      const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  // Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

  // const compare = (a, b) => a - b

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.

  oddsAndEvens.sort((a, b) => a - b)

  console.log(oddsAndEvens);