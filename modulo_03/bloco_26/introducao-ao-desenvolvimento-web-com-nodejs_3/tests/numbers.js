const { expect } = require('chai');

const { numerosNaturais } = require('../index');

describe('numerosNaturais', () => {
  describe('quando o número for maior que 0', () => {
    it('a responta é uma string', () => {
      expect(numerosNaturais(1)).to.be.a('string');
    });

    it('o resultado é positivo', () => {
      expect(numerosNaturais(1)).to.be.equal('positivo');
    });
  });

  describe('quando o número for menor que 0', () => {
    it('a responta é uma string', () => {
      expect(numerosNaturais(-1)).to.be.a('string');
    });

    it('o resultado é positivo', () => {
      expect(numerosNaturais(-1)).to.be.equal('negativo');
    });
  });

  describe('quando o número for igual a 0', () => {
    it('a responta é uma string', () => {
      expect(numerosNaturais(0)).to.be.a('string');
    });

    it('o resultado é positivo', () => {
      expect(numerosNaturais(0)).to.be.equal('neutro');
    });
  });

  describe('se o parametro não for um numero', () => {
    it('a responta é uma string', () => {
      expect(numerosNaturais('zero')).to.be.a('string');
    });

    it('retorna "o valor deve ser um numero"', () => {
      expect(numerosNaturais('zero')).to.be.equal('o valor deve ser um numero')
    })
  })
});
