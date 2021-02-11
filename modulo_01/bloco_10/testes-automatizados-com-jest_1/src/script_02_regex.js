const cypherObg = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

function encode(word) {
  return word
    .split('')
    .map((letter) => (cypherObg[letter] ? cypherObg[letter] : letter))
    .join('');
}

function decode(code) {
  const cypherEntries = Object.entries(cypherObg);

  return code
    .split('')
    .map((cypher) => {
      const regex = /[0-9]/
      const findTheEntry = cypherEntries.find(entry => entry[1] === cypher)

      return regex.test(cypher) ? findTheEntry : cypher
    })
    .map(element => typeof element === 'string' ? element : element[0])
    .join('');
}