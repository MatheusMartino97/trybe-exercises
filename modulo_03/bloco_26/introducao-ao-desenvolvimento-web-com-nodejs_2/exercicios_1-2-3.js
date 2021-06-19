function praticeWithPromises(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject(new Error('Informe apenas números'));

    const resultado = (a + b) * c;

    if (resultado < 50) reject(new Error('Valor muito baixo'));

    resolve(resultado);
  });
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

// praticeWithPromises(generateRandomNumber(), generateRandomNumber(), generateRandomNumber())
//   .then((data) => console.log(data))
//   .catch(({ message }) => console.error('Erro:', message))

async function callPraticeWithPromises() {
  try {
    const resultado = await praticeWithPromises(
      generateRandomNumber(),
      generateRandomNumber(),
      generateRandomNumber()
    );

    console.log(resultado)
  } catch (error) {
    console.error('Erro:', error)
  }
}

callPraticeWithPromises()