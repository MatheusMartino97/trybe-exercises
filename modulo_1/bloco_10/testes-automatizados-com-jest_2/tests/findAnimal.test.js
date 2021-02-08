const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    const foundAnimal = Animals.find(animal => animal.name === name)

    if (foundAnimal) {
      resolve(foundAnimal)
    } else {
      reject('Nenhum animal com esse nome!')
    }    
  })
};

const getAnimal = (name) => {
  return findAnimalByName(name)
  .then(response => response)
  // .catch(error => error)
};

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', async () => {
      expect.assertions(1);
      const animal = await getAnimal('Dorminhoco');
      expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', async () => {
      try {
        await getAnimal('Bob');
      } catch (error) {
        expect(error).toEqual('Nenhum animal com esse nome!');
      }
    });
  });
});