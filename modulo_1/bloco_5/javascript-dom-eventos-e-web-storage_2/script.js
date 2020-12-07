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
let divClassLeftContent = document.createElement('div')
divClassLeftContent.classList.add('left-content')
divClassMainContent.appendChild(divClassLeftContent)

// 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2
let divClassRightContent = document.createElement('div')
divClassRightContent.classList.add('right-content')
divClassMainContent.appendChild(divClassRightContent)

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let smallImage = document.createElement('img')
smallImage.src = 'https://picsum.photos/200'
divClassLeftContent.appendChild(smallImage)

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let unorderedList = document.createElement('ul')
divClassRightContent.appendChild(unorderedList)

let listValues = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']

for (let number of listValues) {
    let listItem = document.createElement('li')

    unorderedList.appendChild(listItem)
    listItem.innerText = number
}

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for (let i = 1; i <= 3; i++) {
    let headingThree = document.createElement('h3')

    divClassMainContent.appendChild(headingThree)
    headingThree.innerText = i +  '° h3'
}

//========================================================

// 1 - Adicione a classe title na tag h1 criada;
document.querySelector('h1').classList.add('title')
let headingThreeList = document.querySelectorAll('h3')

for (let heading of headingThreeList) {
    heading.classList.add('description')
}

// 3 - Remova o div criado no passo 5 (aquele que possui a classe left-content).
// document.querySelector('.left-content').parentElement.removeChild(document.querySelector('.left-content'))
let leftContentParent = document.querySelector('.left-content').parentElement
leftContentParent.removeChild(divClassLeftContent)

// 4 - Centralize o div criado no passo 6 (aquele que possui a classe right-content).
divClassRightContent.style.marginRight = 'auto'

// 5 - Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
let centerContentParent = document.querySelector('.center-content').parentElement
centerContentParent.style.backgroundColor = 'green'

// 6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let listItemList = document.querySelectorAll('li')

for (let i = 9; i <= 10; i++) {
    unorderedList.removeChild(listItemList[i - 1])
}
console.log(listItemList)
