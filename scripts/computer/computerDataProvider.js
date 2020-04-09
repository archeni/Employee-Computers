
let computers = []

export const getSavedComputers = () => {
  return fetch('http://localhost:3000/computers')
    //taking what was recieved(promise) and turning it into java
    .then(response => response.json())
    //taking that java and storing it then putting it in eateries
    .then(parsedComputers => {
        computers = parsedComputers
  })
}


export const useComputers = () => computers.slice()