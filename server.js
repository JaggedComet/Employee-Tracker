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
                    "Update Employee Role",
                    "Close application"
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
                    addRole();
                    break;
                case "Add an Employee":
                    // run function
                    addEmployee();
                    break;
                case "Update Employee Role":
                    // run function
                    break;
            }
        });
}

function viewDepartment() {
    db.query('SELECT department.name FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        mainMenu();
    })
}


function viewRoles() {
    db.query('SELECT role.title, role.salary FROM role', function (err, res) {
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
    db.query('SELECT department.name FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
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
    });
}

function addRole() {
    db.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        const departmentNames = res.map((department) => ({
            name: `${department.name}`,
            value: department.id,
        }));
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "newTitle",
                    message: "Name the Role:",
                },
                {
                    type: "input",
                    name: "newSalary",
                    message: "How much are they getting paid?",
                },
                {
                    type: "list",
                    name: "newDepart",
                    message: "Which department?",
                    choices: departmentNames,
                },
            ])
            .then((answer) => {
                db.query(`INSERT INTO role (title, salary, department_id) values ("${answer.newTitle}", "${answer.newSalary}", "${answer.newDepart}")`)
                mainMenu();
            })
    })

}


function addEmployee() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "newFirst",
                message: "What's the first name of the new Employee?",
            },
            {
                type: "input",
                name: "newLast",
                message: "What's the last name of the new Employee?",
            },
            {
                type: "input",
                name: "empRole",
                message: "What role does this employee have?",
                // validate: {
                //     isInt: true,
                //     notNull: true,
                // }
            },
            {
                type: "input",
                name: "empManager",
                message: "Who is the employee manager?",
                // validate: {
                //     isInt: true,
                //     notNull: true,
                // }
            },
        ])
        .then((answer) => {
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("${answer.newFirst}", "${answer.newLast}", "${answer.empRole}", "${answer.empManager}")`)
            mainMenu();
        })
}

// update an employee role
function updateEmployee() {
    db.query("Select * from employee");
    inquirer
        .prompt([
            {
                type: "input",
                name: "selectEmployee",
                message: "Please select employee by id, whose role you want to change."
            },
            {
                type: "input",
                name: "empRole",
                message: "What role does this employee have?",
                // validate: {
                //     isInt: true,
                //     notNull: true,
                // }
            },
        ])
        .then((answer) => {
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("${answer.newFirst}", "${answer.newLast}", "${answer.empRole}", "${answer.empManager}")`)
            mainMenu();
        })
}


mainMenu();
// db.query('SELECT * FROM employee', function (err, results) {
//   const choices = results.map((employee) => ({
//     name: `${employee.first_name} ${employee.last_name}`,
//     id: `${employee.id}`
//   }));
//   console.table(choices);
// })