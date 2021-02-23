/**
 * Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .

 */
function atLeastOneEven (a , b , c) {
    if (a % 2 != 0 && b % 2 != 0 && c % 2 != 0) {
        console.log (false)
    } else {
        console.log(true)
    }
}

atLeastOneEven(8 , 9 , 2)