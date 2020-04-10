
let customers = []

export const getSavedCustomers = () => {
  return fetch('http://localhost:3000/Customers')
    //taking what was recieved(promise) and turning it into java
    .then(response => response.json())
    //taking that java and storing it then putting it in eateries
    .then(parsedCustomers => {
        customers = parsedCustomers
  })
}


export const useCustomers = () => customers.slice()