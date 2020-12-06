// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let bodyElement = document.body
let heading = document.createElement('h1')

bodyElement.appendChild(heading)

heading.innerText = 'Exercício 5.2 - JavaScript DOM'