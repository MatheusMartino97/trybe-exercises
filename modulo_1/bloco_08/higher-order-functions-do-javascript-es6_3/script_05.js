// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  

    const quantity = names.reduce((acc, word) => {
        // Cada palavra foi transformada em um array de letras, então esse array foi
        // filtrado para que seja criado um array só de letras 'A' e 'a'. 
        // 
        // Essa linha de código soma o acumulador com o tamanho de cada array de letras 'A' ou 'a'.
        return acc + word.split('').filter((letter) => letter === 'A' || letter === 'a').length
    }, 0)

    return quantity
}

// console.log(containsA())

assert.deepStrictEqual(containsA(), 20);