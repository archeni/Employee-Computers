
let employeeCustomers = []

export const getSavedEmployeeCustomers = () => {
  return fetch('http://localhost:3000/employeeCustomers')
    //taking what was recieved(promise) and turning it into java
    .then(response => response.json())
    //taking that java and storing it then putting it in eateries
    .then(parsedEmployeeCustomers => {
        employeeCustomers = parsedEmployeeCustomers
  })
}


export const useEmployeeCustomers = () => employeeCustomers.slice()