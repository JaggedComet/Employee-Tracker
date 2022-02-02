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