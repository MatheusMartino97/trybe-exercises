const elements = {
    body: document.body,
    content: document.querySelector('.content'),
    pageTitle: document.querySelector('header'),
    contentParagraph: document.querySelector('.content p'),
}

const buttons = {
    pageBackgroundColorButton: document.querySelector('#page-background-color'),
    contentBackgroundColorButton: document.querySelector('#content-background-color'),
    pageTitleButton: document.querySelector('#page-title'),
    contentBorderButton: document.querySelector('#content-border'),
    contentTextButton: document.querySelector('#content-text')
}

setColors()
listenToSubmit()

function setColors () {
    if (localStorage.pageBackgroundColor) {
        elements.body.style.backgroundColor = localStorage.pageBackgroundColor
    }

    if (localStorage.contentBackgroundColor) {
        elements.content.style.backgroundColor = localStorage.contentBackgroundColor
    }

    if (localStorage.pageTitleColor) {
        elements.pageTitle.style.color = localStorage.pageTitleColor
    }

    if (localStorage.contentBorderColor) {
        elements.content.style.borderColor = localStorage.contentBorderColor
    }

    if (localStorage.contentParagraphColor) {
        elements.contentParagraph.style.color = localStorage.contentParagraphColor
    }
}

function listenToSubmit () {
    const submitButton = document.querySelector('.button')

    submitButton.addEventListener('click', updateLocalStorage)
}

function updateLocalStorage () {
    localStorage.pageBackgroundColor = buttons.pageBackgroundColorButton.value
    localStorage.contentBackgroundColor = buttons.contentBackgroundColorButton.value
    localStorage.pageTitleColor = buttons.pageTitleButton.value
    localStorage.contentBorderColor = buttons.contentBorderButton.value
    localStorage.contentParagraphColor = buttons.contentTextButton.value

    setColors()
}   