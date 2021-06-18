module.exports = () => {
  const { questionInt } = require('readline-sync');

  const distance = questionInt('Distância em metros: ');
  const time = questionInt('Tempo em segundos: ');

  function getAverageSpeed(distance, time) {
    const averageSpeed = (distance / time).toFixed(2);

    console.log(`A velocidade é de ${averageSpeed}m/s`);
  }

  getAverageSpeed(distance, time);
};
