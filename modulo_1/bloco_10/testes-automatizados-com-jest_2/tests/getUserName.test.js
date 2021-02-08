const { users } = require('../src/functions.js');
const { findUserById } = require('../src/functions.js');
const { getUserName } = require('../src/functions.js');

// 

describe('Testes para getUserName', () => {
  describe('Quando o usuário existe', () => {
    it('Teste se a função retorna o usuário encontrado', () => {
      expect.assertions(1);

      return getUserName(5).then((data) => expect(data).toBe('Paul'));
    });
  });

  describe('Quando o usuário não existe', () => {
    it('Teste se a função retorna um erro', () => {
      expect.assertions(1);

      return getUserName(7).catch((error) => {
        expect(error).toEqual({ error: 'User with 7 not found.' });
      });
    });
  });
});

// 

describe('Testes para getUserName', () => {
  describe('Quando o usuário existe', () => {
    it('Teste se a função retorna o usuário encontrado', async () => {
      expect.assertions(1);

      const data = await getUserName(5);
      return expect(data).toBe('Paul');
    });
  });

  describe('Quando o usuário não existe', () => {
    it('Teste se a função retorna um erro', async () => {
      expect.assertions(1);

      try {
        await getUserName(7);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 7 not found.' });
      }
    });
  });
});