module.exports = () => {
  const { questionFloat } = require('readline-sync');

  const weight = questionFloat('Digite seu peso: ');
  const height = questionFloat('Digite sua altura: ');

  function matchIMC(IMC) {
    let result;

    if (IMC < 18.5) result = 'Abaixo do peso (magreza)';
    if (IMC >= 18.5 && IMC <= 24.9) result = 'Peso normal';
    if (IMC >= 25 && IMC <= 29.9) result = 'Acima do peso (sobrepeso)';
    if (IMC >= 30 && IMC <= 34.9) result = 'Obesidade grau I';
    if (IMC >= 35 && IMC <= 39.9) result = 'Obesidade grau II';
    if (IMC >= 40) resul = 'Obesidade graus III e IV';

    return result;
  }

  function getIMC(weight, height) {
    const IMC = (weight / (height * 2)).toFixed(2);

    console.log(`Seu IMC é ${IMC}`);
    console.log(matchIMC(IMC));
  }

  getIMC(weight, height);
};
