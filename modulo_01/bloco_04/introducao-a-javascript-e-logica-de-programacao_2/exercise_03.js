/**
 * Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:
 *
 * let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 *
 * 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 function arrayAverage (array) {
     let sum = 0
     let average

     for (let i = 0; i < array.length; i++) {
        sum += array[i]
     }
     average = sum / array.length
     console.log(average)
 }

 arrayAverage(numbers)