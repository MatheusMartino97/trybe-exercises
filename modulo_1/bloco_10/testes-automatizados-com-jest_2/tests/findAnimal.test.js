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

const findAnimalsByAge = (age) => {
  return new Promise((resolve, reject) => {
    const filterByAge = Animals.filter(animal => animal.age === age)

    if (filterByAge.length !== 0) {
      resolve(filterByAge)
    } else {
      reject('Nenhum animal com essa idade')
    }
  })
}

const getAnimal = (name) => {
  return findAnimalByName(name)
  .then(response => response)
  // .catch(error => error)
};

const getAnimalByAge = (age) => {
  return findAnimalsByAge(age)
  .then(response => response)
}

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

describe('Testando promise - findAnimalsByAge', () => {
  describe('Quando existem animais', () => {
    it('Retorna lista de animais', () => {
      expect.assertions(1)

      return findAnimalsByAge(1)
      .then((animal) => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }])
      })
    })
  })

  describe('Quando não existem animais', () => {
    it('Retorna erro', () => {
      expect.assertions(1)

      return findAnimalsByAge(8)
      .catch((error) => {
        expect(error).toBe('Nenhum animal com essa idade')
      })
    })
  })
})