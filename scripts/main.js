import { renderEmployeeList } from "./employee/employeeList.js";
import { getSavedEmployees } from "./employee/employeeDataProvider.js";
import { getSavedComputers } from "./computer/computerDataProvider.js";
import { getSavedDepartment } from "./department/departmentDataProvider.js";
import { getSavedLocations } from "./location/locationDataProvider.js";
import { getSavedCustomers } from "./customer/customerDataProvider.js";
import { getSavedEmployeeCustomers } from "./customer/employeeCustomerDataProvider.js";


getSavedEmployees()
  .then(getSavedComputers)
  .then(getSavedDepartment)
  .then(getSavedLocations)
  .then(getSavedEmployeeCustomers)
  .then(getSavedCustomers)
  .then(renderEmployeeList)