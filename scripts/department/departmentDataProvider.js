
let department = []

export const getSavedDepartment = () => {
  return fetch('http://localhost:3000/departments')
    //taking what was recieved(promise) and turning it into java
    .then(response => response.json())
    //taking that java and storing it then putting it in eateries
    .then(parsedDepartment => {
        department = parsedDepartment
  })
}


export const useDepartment = () => department.slice()