// Bonus 1 -  Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa

function romanToArabic(roman) {
  let romanUpper = roman.toUpperCase();
  let result = 0;

  let list = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < roman.length; i++) {
    if (list[romanUpper[i]] >= list[romanUpper[i + 1]]) {
      result += list[romanUpper[i]];
    }

    if (list[romanUpper[i]] < list[romanUpper[i + 1]]) {
      result += list[romanUpper[i + 1]] - list[romanUpper[i]];
      i++;
    }

    if (
      i === roman.length - 1 &&
      list[romanUpper[i]] <= list[romanUpper[i - 1]]
    ) {
      result += list[romanUpper[i]];
    }
  }
  console.log(result);
}

romanToArabic("MCMXCVII");

// A função também aceita o input tanto maiusculo quanto minusculo
