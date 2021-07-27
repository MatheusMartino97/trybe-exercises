const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../../api/app');
const { getConnection, DBServer } = require('../connectionMock');
const { MongoClient } = require('mongodb');

const { expect } = chai;

describe('POST /api/users', () => {
  describe('quando é criado com sucesso', () => {
    let response = {};

    before(async () => {
      const connectionMock = await getConnection();
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      await connectionMock.db('jwt_exercises').collection('users').insertOne({
        username: 'username-ok',
        password: 'password-ok'
      })
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna o código de status 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o texto "Novo usuário criado com sucesso"', () => {
      expect(response.body.message).to.be.equal(
        'Novo usuário criado com sucesso'
      );
    });
  });
});
