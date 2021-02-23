/**
 * Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
 */

function atLeastOneOdd (a , b , c) {
    if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
        console.log (false)
    } else {
        console.log(true)
    }
}

atLeastOneOdd(8 , 7 , 2)