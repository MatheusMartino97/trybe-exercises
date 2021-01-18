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

function makeDivPreview () {
    const fieldsetChindrenNodeList = document.querySelectorAll('input:not([type="radio"]), input[type="radio"]:checked, textarea, select')
    const div = document.createElement('div')

    document.body.appendChild(div)

    for (let i = 0; i < fieldsetChindrenNodeList.length; i++) {
        const childDiv = document.createElement('div')

        childDiv.innerText = fieldsetChindrenNodeList[i].value
        div.appendChild(childDiv)
    }
}

function listenToSubmitButton () {
    const submitButton = document.querySelector('button[type="submit"]')

    submitButton.addEventListener('click', preventDefaultFunciton)
    submitButton.addEventListener('click', makeDivPreview)
}

listenToSubmitButton()