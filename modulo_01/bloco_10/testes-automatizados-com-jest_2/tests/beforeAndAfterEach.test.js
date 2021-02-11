beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// Acho que será logado no console:
// 1 - beforeEach (V)
// 1 - test (V)
// 1 - afterEach (V)
// 1 - beforeEach (V)
// 2 - beforeEach (V)
// 2 - test (V)
// 1 - afterEach (F)
// 2 - afterEach (F)
// 
// O que realmente foi logado no console:
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach