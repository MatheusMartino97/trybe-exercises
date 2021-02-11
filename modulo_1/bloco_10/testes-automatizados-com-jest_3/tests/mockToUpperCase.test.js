// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const stringFunctions = require('../src/stringFunctions.js')

describe('testando implementações', () => {
  it('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    const { toUpperCase } = stringFunctions

    const toLowerCase = jest
    .spyOn(stringFunctions, 'toUpperCase')
    .mockImplementation(string => string.toLowerCase())

    expect(toLowerCase('AIAI')).toBe('aiai')

    toLowerCase.mockRestore()

    expect(toUpperCase('aiai')).toBe('AIAI')
  })
})