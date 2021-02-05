const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it('uppercase test to equal TEST', () => {
  uppercase('matheus', (string) => {
    expect(string).toBe('MATHEUS')
  })
})