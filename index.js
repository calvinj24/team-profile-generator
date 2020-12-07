const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
let employees = [];

const employeePrompt = () => {
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
      type: 'input',
      name: 'email',
      message: "Enter employee's email address:"
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
    },
  ])
}

const newEmployee = () => {
  employeePrompt()
    .then(empData => {
      addEmployee(empData);
    })
}

const addEmployee = (data) => {
  switch (data.role) {
    case "Engineer":
      employees.push(new Engineer(data.name, data.id, data.email, data.gitHub));
      break;
    case "Manager":
      employees.push(new Manager(data.name, data.id, data.email, data.officeNumber));
      break;
    case "Intern":
      employees.push(new Intern(data.name, data.id, data.email, data.school));
      break;
  }
  console.log(employees);

  // ask user if they would like to add a new employeee
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'another',
        message: 'Would you like to add another employee?'
      }
    ])
    .then(({another}) => {
      if (another) {
        newEmployee();
      }
    })
}

newEmployee();