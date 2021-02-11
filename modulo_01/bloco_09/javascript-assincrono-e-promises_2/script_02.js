const numbers = () => {
  return new Promise((resolve, reject) => {
    const arrayOfNumbers = [];

    for (let i = 0; i < 10; i++) {
      const randomNumberUpTo50 = Math.round(Math.random() * 50);

      arrayOfNumbers.push(randomNumberUpTo50 * randomNumberUpTo50);
    }

    const sumOfArrayNumbers = arrayOfNumbers.reduce(
      (acc, number) => acc + number,
      0
    );

    if (sumOfArrayNumbers < 8000) {
      const dividers = [2, 3, 5, 10];
      const divisions = dividers.map(divider => sumOfArrayNumbers / divider);

      resolve(divisions);
    } else {
      reject('É mais de oito mil! Essa promise deve estar quebrada!');
    }
  });
};

const evaluate = () => {
  numbers()
    .then(response => console.log(response.reduce((acc, value) => acc + value, 0)))
    .catch(error => console.log(error))
};

setInterval(() => evaluate(), 2000)
