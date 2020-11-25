/*
    Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
*/

let a , b , c

a = 60
b = 100
c = 20

const sum = a + b + c

if (sum == 180) {
    console.log(true)
} else {
    console.log(false)
}
