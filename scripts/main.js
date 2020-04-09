import { renderEmployeeList } from "./employee/employeeList.js";
import { getSavedEmployees } from "./employee/employeeDataProvider.js";
import { getSavedComputers } from "./computer/computerDataProvider.js";
import { getSavedDepartment } from "./department/departmentDataProvider.js";
import { getSavedLocations } from "./location/locationDataProvider.js";


getSavedEmployees()
  .then(getSavedComputers)
  .then(getSavedDepartment)
  .then(getSavedLocations)
  .then(renderEmployeeList)