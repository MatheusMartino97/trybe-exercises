const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');
const { writeFile } = require('../index');

describe('writeFile', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  describe('a resposta', () => {
    it('retorna uma string', () => {
      expect(writeFile('arquivo.txt', 'vqv com tdd')).to.be.a('string');
    });

    it('retorna "ok"', () => {
      expect(writeFile('arquivo.txt', 'vqv com tdd')).to.be.equal('ok');
    });
  });
});
