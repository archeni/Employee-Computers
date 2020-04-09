export const employeeHTML = (employee, computer, department, location) => {
  return `
  <div class="employee">
    <h3>${employee.firstName} ${employee.lastName}</h3>
    <div class='employee_computer'>Is using a ${computer.model}</div>
    <div class='employee_department'>Is in department ${department.id}</div>
    <div class='employee_location'>Works at location ${location.city}</div>
  </div>
  `
}