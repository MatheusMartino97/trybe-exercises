/**
 * Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
 */


 function percentageGrade (grade) {
     let result = 'Invalid grade'

     if (grade >= 90 && grade <= 100) {
         result = 'A'
     } else if (grade >= 80 && grade < 90) {
        result = 'B'
     } else if (grade >= 70 && grade < 80) {
         result = 'C'
     } else if (grade >= 60 && grade < 70) {
         result = 'D'
     } else if (grade >= 50 && grade < 60) {
         result = 'E'
     } else if (grade >= 0 && grade < 50) {
         result = 'F'
     }

     console.log(result)
 }

 percentageGrade(95)