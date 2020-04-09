/*
    This components is only reposible for taking the other components 
    we created and render it to the DOM
*/
import { useEmployees } from "./employeeDataProvider.js";
import { useComputers } from "../computer/computerDataProvider.js";


const eventHub = document.querySelector(".container")

const render = () => {
  const allEmployees = useEmployees()
  const allComputers = useComputers()

  eventHub.innerHTML = `
  
  `
}
 

// Adds a head title to the saved itineraries list
export const savedTripsFunc = () => {contentElement.innerHTML += `<h2>Saved Trips</h2>`}


// exports render function
export const renderSavedItineraries = () =>{
    render()
}
       
