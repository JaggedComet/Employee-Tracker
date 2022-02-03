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
                name: "mainMenu",
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
            switch (answers.mainMenu) {
                case "View All Departments":
                    // run function
                    viewDepartment();
                    break;
                case "View All Roles":
                    // run function
                    viewRoles();
                    break;
                case "View All Employees":
                    // run function
                    viewEmployees();
                    break;
                case "Add Department":
                    // run function
                    addDepartment();
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
        });
}

function viewDepartment() {
    db.query('SELECT name FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        mainMenu();
    })
}


function viewRoles() {
    db.query('SELECT role.title FROM role', function (err, res) {
        if (err) throw err;
        console.table(res);
        mainMenu();
    })
}


function viewEmployees() {
    db.query('SELECT employee.first_name, employee.last_name FROM employee', function (err, res) {
        if (err) throw err;
        console.table(res);
        mainMenu();
    })
}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "addDepart",
                message: "Please type the name of the department you want to add."
            }
        ])
        .then((answer) => {
            db.query(`INSERT INTO department (name) values ("${answer.addDepart}")`)
            mainMenu();
        })
}

function addRole() {
    inquirer
    .prompt([
        
    ])
}

mainMenu();
// db.query('SELECT * FROM employee', function (err, results) {
//   const choices = results.map((employee) => ({
//     name: `${employee.first_name} ${employee.last_name}`,
//     id: `${employee.id}`
//   }));
//   console.table(choices);
// })