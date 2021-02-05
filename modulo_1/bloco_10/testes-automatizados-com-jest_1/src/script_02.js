function decypher(string, action) {
  const cypherObg = {
    encode: {
      a: '1',
      e: '2',
      i: '3',
      o: '4',
      u: '5',
    },
    decode: {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    },
  };

  return string
    .split('')
    .map((char) => (cypherObg[action][char] ? cypherObg[action][char] : char))
    .join('');
}
