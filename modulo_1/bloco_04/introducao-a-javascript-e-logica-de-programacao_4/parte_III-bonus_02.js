// Bonus 2 - Desafio 16 + 8 = 214 ;

function add(num1, num2) {
  let nS1 = num1.toString();
  let nS2 = num2.toString();
  let diff = Math.abs(nS1.length - nS2.length);
  let smaller;
  let bigger;
  let zeros = "";
  let result = "";

  if (diff !== 0) {
    if (nS1.length < nS2.length) {
      smaller = nS1;
      bigger = nS2;
    } else {
      smaller = nS2;
      bigger = nS1;
    }

    for (let i = 1; i <= diff; i++) {
      zeros += "0";
    }
    smaller = zeros + smaller;

    for (let i = 0; i < bigger.length; i++) {
      let s = parseInt(smaller[i]);
      let b = parseInt(bigger[i]);
      let temp = s + b;
      let tempS = temp.toString();
      result += tempS;
    }
    result = parseInt(result);
    return result;
  } else {
    for (let i = 0; i < nS1.length; i++) {
      let s = parseInt(nS1[i]);
      let b = parseInt(nS2[i]);
      let temp = s + b;
      let tempS = temp.toString();
      result += tempS;
    }
    result = parseInt(result);
    return result;
  }
}

console.log(add(16, 18));
