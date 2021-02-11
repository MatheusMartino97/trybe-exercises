let { fetchDogPicture } = require('../src/dogPictures.js')
// const { getDog } = require('../src/dogPictures.js')
const fetch = require('node-fetch')

// Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

describe('testando a requisição', () => {
  fetchDogPicture = jest.fn()
  
  afterEach(fetchDogPicture.mockReset())

  it('testando requisição caso a promisse resolva', async () => {
    fetchDogPicture.mockResolvedValue("request sucess");

    fetchDogPicture();
    expect(fetchDogPicture).toHaveBeenCalled();
    expect(fetchDogPicture).toHaveBeenCalledTimes(1);
    expect(fetchDogPicture()).resolves.toBe("request sucess");
    expect(fetchDogPicture).toHaveBeenCalledTimes(2);
  })

  

  it("testando requisição caso a promisse seja rejeitada", async () => {
    fetchDogPicture.mockRejectedValue("request failed");

    expect(fetchDogPicture).toHaveBeenCalledTimes(0);
    expect(fetchDogPicture()).rejects.toMatch("request failed");
    expect(fetchDogPicture).toHaveBeenCalledTimes(1);
  })
})