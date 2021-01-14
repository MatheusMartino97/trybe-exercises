// function listenToClickMeButton () {
//     const clickMeButton = document.querySelector('#click-me')
//     let times = 0

//     clickMeButton.addEventListener('click', () => {
//         const timesClickedSpam = document.querySelector('#times-clicked')
        

//         times += 1
//         timesClickedSpam.innerText = times
//         console.log('kjashkfdah')
//     })
// }

// listenToClickMeButton()

function sum () {
    const timesClickedSpam = document.querySelector('#times-clicked')
    let times = parseInt(document.querySelector('#times-clicked').innerText, 10)

    times += 1
    timesClickedSpam.innerText = times
}

function listenToClickMeButton () {
    const clickMeButton = document.querySelector('#click-me')

    clickMeButton.addEventListener('click', sum)
}

listenToClickMeButton()