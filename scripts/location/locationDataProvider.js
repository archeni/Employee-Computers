
let locations = []

export const getSavedLocations = () => {
  return fetch('http://localhost:3000/locations')
    //taking what was recieved(promise) and turning it into java
    .then(response => response.json())
    //taking that java and storing it then putting it in eateries
    .then(parsedLocations => {
        locations = parsedLocations
  })
}


export const useLocations = () => locations.slice()