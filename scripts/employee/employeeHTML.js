export const employeeHTML = (employee) => {
  return `
  <div class="employee">
    <h3>${employee.businessName}</h3>
    <div class='employee_info'>${employee.description}</div>
  </div>
  `
}