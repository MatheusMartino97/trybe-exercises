// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indexOfSmallest (array) {
    let smallerIndex
    let currentSmaller = array[0]

    for (let index in array) {
        if (array[index] < currentSmaller) {
            currentSmaller = array[index]
            smallerIndex = index
        }
    }
    console.log(smallerIndex)
}

indexOfSmallest([2, 4, 6, 7, 10, 0, -3])