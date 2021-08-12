const inquirer = require("inquirer");
const express = require('express');
const router = express.Router();

// router.use(require('./roleRoutes'));
// router.use(require('./employeeRoutes'));


const startQuestion = () =>
  inquirer.prompt([
    {
      type: "list",
      name: "startDecision",
      message: "Would you like to:",
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update and Employee Role"],
    }
],
  );

startQuestion()
.then(async(answer) => {return answer})







// const inquirer = require("inquirer");
// const express = require('express');
// const router = express.Router();
// const cTable = require('console.table');
// router.use(require('./departmentRoutes'));

// router.use(require('./departmentRoutes'));
// router.use(require('./roleRoutes'));
// router.use(require('./employeeRoutes'));

// const startQuestion = () =>
//   inquirer.prompt(
//     [{
//       type: "checkbox",
//       name: "startDecision",
//       message: "Would you like to:",
//       choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update and Employee Role"],
//     },
// ]);



// startQuestion()
// .then((answer) => console.log(answer))



// .then(async(answer) => { if (answer = 'View All Departments') {
//     console.table(router.use)
// } 

// });

// module.exports = router;
