const decypher = require('../src/script_02.js')

describe('Testes para a função decypher',() => {
  it('Teste se decypher é uma função', () => {
    expect(typeof decypher).toBe('function')
  })

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(decypher('aeiou', 'encode')).toBe('12345')
  })

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decypher('12345', 'decode')).toBe('aeiou')
  })

  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decypher('bcdfghjklmnpqrstvwxyz', 'encode')).toBe('bcdfghjklmnpqrstvwxyz');

    expect(decypher('06789', 'encode')).toBe('06789');
  })

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decypher('tamão', 'encode').length).toBe('tamão'.length)
  })
})
