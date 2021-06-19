const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent)
  })
  .then((data) => {
    return data.map(({ id, name }) => `${id} - ${name}`)
  })
  .then((arrayOfStrings) => {
    arrayOfStrings.forEach((string) => {
      console.log(string)
    })
  })