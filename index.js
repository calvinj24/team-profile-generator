const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { choices } = require('yargs');
let cont;


// prompt user for employee entry
// select role
// enter information

// create new employee object
// prompt user for new employee

const newEmployee = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the employees name:"
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter employee's id:"
    },
    {
      type: 'list',
      name: 'role',
      message: "Enter employee's role",
      choices: ['Engineer','Manager','Intern']
    },
    {
      when: function (response) {
        return (response.role === "Engineer")
      },
      type: 'input',
      name: 'gitHub',
      message: "Enter engineer's gitHub username:"
    },
    {
      when: function (response) {
        return (response.role === "Manager")
      },
      type: 'input',
      name: 'officeNumber',
      message: "Enter manager's office number:"
    },
    {
      when: function (response) {
        return (response.role === "Intern")
      },
      type: 'input',
      name: 'school',
      message: "Enter intern's school:"
    }
  ])
}

//const inputTeam = () => {
//  while (!cont) {
//    newEmployee();
//    inquirer.prompt
//  }
//
//
//}


//function init() {
//  promptUser()
//    .then(employeeData => {
//      return generateHTML(employeeData)
//    })
//    .then(html => {
//      writeToFile()
//    })
//}
newEmployee();