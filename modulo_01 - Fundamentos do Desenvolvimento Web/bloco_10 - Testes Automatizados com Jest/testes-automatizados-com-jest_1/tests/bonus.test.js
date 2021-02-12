const { expect, it } = require('@jest/globals')
const searchEmployee = require('../src/bonus.js')

describe('Testes para a função searchEmployee', () => {
  it('Testa se a função existe', () => {
    expect(searchEmployee).toBeDefined()
  })

  it('Testa se a função retorna o objeto esperado', () => {
    expect(searchEmployee('1256-4', 'lastName')).toEqual({ id: '1256-4', lastName: 'Bezos'})
  })

  it('Testa se a função retorna erro quando não encontra o id', () => {
    expect(() => { searchEmployee('0000', 'lastName') }).toThrow(/ID não identificada./)
  })

  it('Testa se a função retorna erro qunado tenta acessar uma informação indisponível', () => {
    expect(() => { searchEmployee('1256-4', 'age') }).toThrow(/Informação indisponível./)
  })

  it('Testa se a função retorna uma erro quando um dos parametros não for passado', () => {
    expect(() => { searchEmployee('1256-4') }).toThrow(/Os parâmetros foram passados incorretamente./);
    expect(() => { searchEmployee('lastName') }).toThrow(/Os parâmetros foram passados incorretamente./);
    expect(() => { searchEmployee() }).toThrow(/Nenhum parâmetro foi passado para a função./);
  })
})