// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a útlima letra de uma string. A terceira deve receber três strings e concatená-las.

const stringFunctions = require('../src/stringFunctions.js')

jest.mock('../src/stringFunctions.js')

describe('testando implementações', () => {
  it('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    const { toUpperCase } = stringFunctions

    toUpperCase.mockImplementation(string => string.toLowerCase())

    expect(toUpperCase('AIAI')).toBe('aiai')
  })

  it('mockando função que recebe um parâmetro e retorna a última letra', () => {
    const { returnFirstLetter } = stringFunctions

    returnFirstLetter.mockImplementation(string => {
      const lastCharIndex = string.length - 1

      return string[lastCharIndex]
    })

    expect(returnFirstLetter('aaaaaaaaaaaaaaaaaaaaaaaab')).toBe('b')
  })

  it('mockando função que recebe 3 parâmetros e os concatena', () => {
    const { concat } = stringFunctions

    concat.mockImplementation((string1, string2, string3) => string1 + string2 + string3)

    expect(concat('Ma', 'the', 'us')).toBe('Matheus')
  })
})
