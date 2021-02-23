const { uppercase } = require('../src/functions.js')

it('uppercase test to equal TEST', () => {
  uppercase('matheus', (string) => {
    expect(string).toBe('MATHEUS')
  })
})