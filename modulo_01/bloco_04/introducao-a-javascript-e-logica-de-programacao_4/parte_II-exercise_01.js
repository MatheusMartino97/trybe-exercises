// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindrome(word) {
  let wordLowerCase = word.toLowerCase();
  let reverseWord = "";

  for (let i = wordLowerCase.length - 1; i >= 0; i--) {
    reverseWord += wordLowerCase[i];
  }

  if (reverseWord === wordLowerCase) {
    console.log("É palíndromo");
  } else {
    console.log("não é palímdromo");
  }
}

isPalindrome("ArAra");
