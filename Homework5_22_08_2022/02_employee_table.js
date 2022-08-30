const table = document.getElementById('employeeTable')
const submit = document.querySelector('#submit')
const input = document.querySelector('#quantity')
submit.addEventListener('click' , () => {
  displayEmployees(input.value)

})
table.addEventListener('click',(event) => {
  if(event.target.className === 'remove') {
    event.target.parentElement.parentElement.remove()
  }
})
async function getSettings() {
  let settings = await fetch('settings.json')
  return settings.json()
}
async function getEmployees() {
  let employees = await fetch('employees.json')
  return employees.json()
}
 async function displayEmployees(maxEmployees) {
  let settings = await getSettings()
  let employeesCollection = await getEmployees()
  let html = ''
  let active = settings.find(el => el.name === 'show_only_active' ).value
  let quantity = maxEmployees || settings.find(el => el.name === 'max_items_to_show').value
  let description = settings.find(el => el.name === 'show_description').value

  for(let employee of employeesCollection) {
    if(quantity <= 0 ) break
      let elHtml = createTableRow(employee,{description,active})
      html += elHtml
      if(elHtml) quantity --
  }
  table.innerHTML = html

 }

 function createTableRow(el,settings) {
if(el['status'] === true || settings.active === false) { 
return`
  <tr>
    <td> ${el.id} </td>
    <td> ${el.name} </td>
    <td> ${settings.description ? el.description : 'N/A'} </td>
    <td> ${el.status} </td>
    <td> <button class = 'remove'>Remove</button> </td>
  </tr>
  `
  }
 return ''
}