module.exports = () => {
  const { questionInt } = require('readline-sync');

  const distance = questionInt('Qual foi a distância percorrida? (metros)');
  const time = questionInt('Quando tempo demorou? (segundos)');

  function getAverageSpeed(distance, time) {
    const averageSpeed = (distance / time).toFixed(2);

    console.log(`A velocidade é de ${averageSpeed}m/s`);
  }

  getAverageSpeed(distance, time);
};
