const hydrate = (string) => {
  let phrase = 'copos de água'
  
  const sum = string
  .split('')
  .filter(char => /[0-9]/.test(char))
  .reduce((acc, number) => acc + parseInt(number), 0)

  
  if (sum === 1) {
    phrase = 'copo de água'
  }

  return `${sum} ${phrase}`
}

module.exports = hydrate
