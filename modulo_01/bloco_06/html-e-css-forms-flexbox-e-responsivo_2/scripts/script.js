const estadosDoBrasil = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins',
    'DF': 'Distrito Federal',
}

function createOptions () {
    const estadoSelect = document.querySelector('#estado')
    
    for (let i in estadosDoBrasil) {
        const option = document.createElement('option')
        const state = estadosDoBrasil[i]

        option.innerText = state 
        option.value = i
        
        estadoSelect.appendChild(option)
    }
}

createOptions()

function preventDefaultFunciton (event) {
    event.preventDefault()
}

function removeDivPreviewsChildrem () {
    const previewDivs = document.querySelector('.previews')
    const previewsDivsChildNodeList = document.querySelectorAll('div.previews div')

    
    for (let i = 0; i < previewsDivsChildNodeList.length; i++) {
        previewDivs.removeChild(previewsDivsChildNodeList[i])
    }
}

function makeDivPreviews () {
    removeDivPreviewsChildrem()

    const fieldsetChindrenNodeList = document.querySelectorAll('input:not([type="radio"]), input[type="radio"]:checked, textarea, select')
    const previewDivs = document.querySelector('.previews')

    for (let i = 0; i < fieldsetChindrenNodeList.length; i++) {
        const childDiv = document.createElement('div')

        childDiv.innerText = fieldsetChindrenNodeList[i].value
        previewDivs.appendChild(childDiv)
    }
}

function listenToSubmitButton () {
    const submitButton = document.querySelector('button[type="submit"]')

    submitButton.addEventListener('click', preventDefaultFunciton)
    submitButton.addEventListener('click', makeDivPreviews)
}

listenToSubmitButton()

function listenToResetButton () {
    const resetButton = document.querySelector('button[type="reset"]')

    resetButton.addEventListener('click', removeDivPreviewsChildrem)
}

listenToResetButton()

const dataInput = document.getElementById('data')

dataInput.DatePickerX.init({
    mondayFirst: false,
    format: 'dd/M/yyyy'
});
