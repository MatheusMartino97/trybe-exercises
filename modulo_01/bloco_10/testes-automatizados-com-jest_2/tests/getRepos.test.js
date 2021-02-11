const { getRepos } = require('../src/functions.js');

describe('Testes para getRepos', () => {
  const endPoint = 'https://api.github.com/orgs/tryber/repos';
  describe('Sucesso', () => {
    const blockOfCode = () => {
      // it('Verifica se repositórios se encontram na lista', () => {
      //   expect.assertions(1);
  
      //   return getRepos(endPoint)
      //   .then((reposNames) => {
      //     expect(reposNames).toContain('sd-01-week4-5-project-todo-list');
      //   });
      // });
  
      // it('Verifica se repositórios se encontram na lista', () => {
      //   expect.assertions(1);
  
      //   return getRepos(endPoint)
      //   .then((reposNames) => {
      //     expect(reposNames).toContain('sd-01-week4-5-project-meme-generator');
      //   });
      // });
    }

    it('Testa se existe repositório', async () => {
      const reposNames = await getRepos(endPoint)

      expect(reposNames).toContain('sd-01-week4-5-project-todo-list')
    })

    it('Testa se existe repositório', async () => {
      const reposNames = await getRepos(endPoint)

      expect(reposNames).toContain('sd-01-week4-5-project-meme-generator')
    })

  });
});
