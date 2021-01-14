
// Crie uma função que receba um número e retorne seu fatorial.
const factorIt = n => {
    let factoring = 1

    for (let i = 2; i <= n; i++) {
        factoring = factoring * i
    }
    return factoring
}

console.log(factorIt(4))