
// Crie uma função que receba um número e retorne seu fatorial.
const factorIt = n => {
    let factoring = 1

    for (let i = 2; i <= n; i++) {
        factoring = factoring * i
    }
    return factoring
}

console.log(factorIt(4))

// Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = phrase => {
    const words = phrase.split(' ')
    let biggestLength = 0
    let biggestWord = ''

    for (let word of words) {
        if (word.length > biggestLength) {
            biggestLength = word.length
            biggestWord = word
        }
    }
    console.log(biggestWord, biggestLength)
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')