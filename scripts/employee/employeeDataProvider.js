
let employees = []

export const getSavedEmployees = () => {
  return fetch('http://localhost:3000/employees')
    //taking what was recieved(promise) and turning it into java
    .then(response => response.json())
    //taking that java and storing it then putting it in eateries
    .then(parsedEmployees => {
        employees = parsedEmployees
  })
}


export const useEmployees = () => employees.slice()