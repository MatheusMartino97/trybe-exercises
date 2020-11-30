// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verifyWordEnd (string, ending) {
    let verificationBegin = string.length - ending.length
    let stringLower = string.toLowerCase()
    let endingLower = ending.toLowerCase()
    let endingSubString = ''

    for (let i = verificationBegin; i < string.length; i++) {
        endingSubString += stringLower[i]
    }
    
    if (endingSubString === endingLower) {
        console.log(true)
    } else {
        console.log(false)
    }
}

verifyWordEnd('tryBe', 'bE')

// A função aceita letras maiusculas e minusculas