// import packages
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');

const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // MySQL password
  password: "password",
  database: "employee_db",
});

function mainMenu() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "mainmenu",
          message: "Select Choice",
          choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Department",
            "Add a Role",
            "Add an Employee",
            "Update Employee Role"
          ],
        },
      ])
      .then((answers) => {
        // print user choice
        switch (answers.options) {
          case "View All Departments":
            // run function
            viewDepartment
            break;
          case "View All Roles":
            // run function
            break;
          case "View All Employees":
            // run function
            break;
          case "Add Department":
            // run function
            break;
          case "Add a Role":
            // run function
            break;
          case "Add an Employee":
            // run function
            break;
          case "Update Employee Role":
            // run function
            break;
        }
        console.log(answers.department);
      });
  }