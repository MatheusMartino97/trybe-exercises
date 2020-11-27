// 1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na
// tela um quadrado feito de asteriscos de lado de tamanho n .

function square (n) {
    let line = ''
    
    for (let i = 0; i < n; i++) {
        line += '*'
    }

    for (let i = 0; i < n; i++) {
        console.log(line)
    }
}

square (5)