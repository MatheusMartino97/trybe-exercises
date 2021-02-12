const fetch = require('node-fetch')

function fetchDogPicture(breed) {
  const endPoint = `https://dog.ceo/api/breed/${breed}/images/random`
  
  return fetch(endPoint)
  .then(response => response.json())
  .then((data) => {
    if(data.status === 'error') {
      return Promise.reject(data)
    }

    return Promise.resolve(data)
  })
  .catch(error => error)
}

// async function getDog(breed) {
//     const data = await fetchDogPicture(breed)

//     console.log(data.message)
// }
// console.log(fetchDogPicture('basenji'))

module.exports = {
  fetchDogPicture,
  // getDog,
}
