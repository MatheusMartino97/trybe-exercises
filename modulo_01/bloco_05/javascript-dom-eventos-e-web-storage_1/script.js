// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
// Crie uma função que mude a cor do quadrado vermelho para branco.
// Crie uma função que corrija o texto da tag <h1>.
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
let p = document.querySelector('p')

p.innerText = 'Já trabalhando e ganhando o suficiente pra pagar a Trybe'
document.getElementsByClassName('main-content')[0].style = 'background-color: rgb(76,164,109)'
document.getElementsByClassName('center-content')[0].style = 'background-color: rgb(255,255,255)'
document.querySelector('h1').innerText = 'Exercício 5.1 - JavaScript'

let upperP = p.innerText.toUpperCase()

p.innerText = upperP

let paragraphs = document.querySelectorAll('p')
for (let i of paragraphs) {
    console.log(i.innerText)
}