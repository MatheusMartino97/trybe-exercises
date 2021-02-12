let { randomNumber } = require('../src/randomNumber.js')


// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

it('testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  randomNumber = jest.fn().mockReturnValue(10)

  expect(randomNumber()).toBe(10)
  expect(randomNumber).toHaveBeenCalled()
  expect(randomNumber).toHaveBeenCalledTimes(1)
  
})

// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

it('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
  randomNumber.mockImplementationOnce((a, b) => a > b ? a / b : 0)

  expect(randomNumber(8, 2)).toBe(4)
  expect(randomNumber).toHaveBeenCalled()
  expect(randomNumber).toHaveBeenCalledWith(8, 2)
})

// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

describe('testando implementações', () => {
  it('mockando função para receber 3 parâmetros e retornar sua multiplicação', () => {
    randomNumber.mockImplementation((a, b, c) => a * b * c)

    expect(randomNumber(2, 3, 4)).toBe(24)
    expect(randomNumber).toHaveBeenCalled()
    expect(randomNumber).toHaveBeenCalledWith(2, 3, 4)
  })

  it('mockando função que recebe um parâmetro e retorna seu dobro', () => {
    randomNumber.mockReset()

    expect(randomNumber).toHaveBeenCalledTimes(0)

    randomNumber.mockImplementation(a => a * 2)

    expect(randomNumber(3)).toBe(6)
    expect(randomNumber).toHaveBeenCalledTimes(1)
    expect(randomNumber).toHaveBeenCalledWith(3)
  })
})
