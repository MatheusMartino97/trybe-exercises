// Pesquisa
const professionalBoard = require('../src/bonus-data.js')

const searchEmployee = (id, detail) => {
  const foundEmployee = professionalBoard.find((employee) => {
    return employee.id === id
  })
  if (!id && !detail) {
    throw new Error('Nenhum parâmetro foi passado para a função.')
  }

  if (!id || !detail) {
    throw new Error('Os parâmetros foram passados incorretamente.')
  }

  if (!foundEmployee) {
    throw new Error('ID não identificada.')
  }

  if (!foundEmployee[detail]) {
    throw new Error('Informação indisponível.') 
  }
  return {
    id: foundEmployee.id,
    [detail]: foundEmployee[detail]
  }
};

module.exports = searchEmployee