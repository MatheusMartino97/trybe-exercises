// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let bodyElement = document.body
let heading = document.createElement('h1')

bodyElement.appendChild(heading)

heading.innerText = 'Exercício 5.2 - JavaScript DOM'

// 2 - Adicione a tag div com a classe main-content como filho da tag body ;
let divClassMainContent = document.createElement('div')
divClassMainContent.classList.add('main-content')
bodyElement.appendChild(divClassMainContent)

// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let divClassCenterContent = document.createElement('div')
divClassCenterContent.classList.add('center-content')
divClassMainContent.appendChild(divClassCenterContent)

// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let paragraph = document.createElement('p')
paragraph.innerText = 'Manipulando o DOM'
divClassCenterContent.appendChild(paragraph)

// 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

console.log(document.querySelectorAll('.main-content *'))
