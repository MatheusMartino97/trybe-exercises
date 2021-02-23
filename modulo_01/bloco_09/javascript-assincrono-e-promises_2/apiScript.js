const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const appendJoke = (joke) => {
  const jokeContainerHeader2 = document.querySelector('#jokeContainer')
  
  jokeContainerHeader2.innerText = joke
}
const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {appendJoke(data.joke)})
};

window.onload = () => fetchJoke();