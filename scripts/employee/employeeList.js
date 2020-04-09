/*
    This components is only reposible for taking the other components 
    we created and render it to the DOM
*/
import { useEmployees } from "./employeeDataProvider.js";
import { useComputers } from "../computer/computerDataProvider.js";
import { employeeHTML } from "./employeeHTML.js";
import { useDepartment } from "../department/departmentDataProvider.js";
import { useLocations } from "../location/locationDataProvider.js";


const eventHub = document.querySelector(".container")

const render = () => {
  const allEmployees = useEmployees()
  const allComputers = useComputers()
  const allDepartments = useDepartment()
  const allLocations = useLocations()

  eventHub.innerHTML = allEmployees.map(
    (employee) => {
      const computerIWant = allComputers.find(
        (computer) => employee.computerId === computer.id)

      const departmentIWant = allDepartments.find(
        (department) => employee.departmentId === department.id)

      const locationIWant = allLocations.find(
        (location) => employee.locationId === location.id)

      return employeeHTML(employee, computerIWant, departmentIWant, locationIWant)
    }
  )
}
 

// Adds a head title to the saved itineraries list


// exports render function
export const renderEmployeeList = () =>{
    render()
}
       
