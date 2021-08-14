const cTable = require("console.table");
const inquirer = require("inquirer");
const db = require("./db/connection");
const connection = require("./db/connection");




connection.connect((err) => {
    if (err) {
        throw err
    } else {
    } firstQuestion();
});


const firstQuestion = async () => {
    try {
        let answer = await inquirer.prompt({
            name: "possibilities",
            type: "list",
            message: "What would you like to do?",
            choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Return"]

        });
        switch (answer.possibilities) {
            case "View all Departments":
                viewDepartments();
                break;

            case "View all Roles":
                viewRoles();
                break;

            case "View all Employees":
                viewEmployees();
                break;

            case "Add a Department":
                newDepartment();
                break;

            case "Add a Role":
                addRole();
                break;

            case "Add an Employee":
                addEmployee();
                break;

            case "Update an Employee role":
                updateRole();
                break;

            case "Return":
                connection.end();
                break;
        };

    } catch (err) {
        console.log(err);

    };
}



function viewDepartments() {
    db.query(`SELECT * FROM Department`, (err, rows) => {
        if (err) {
            throw err;
        } else {
            console.log("Viewing All Current Departments")
            console.table(rows);
            firstQuestion();
        }
    });
};


function viewRoles() {

    db.query(`SELECT * FROM _Role`, (err, rows) => {
        if (err) {
            throw err;
        } else {
            console.log("Viewing All Current Roles");
            console.table(rows);
            firstQuestion();
        }
    });
};

 
function viewEmployees() {
    db.query(`SELECT * FROM Employee`, (err, rows) => {
        if (err) {
            throw err;
        } else {
            console.log("Viewing All Current Employees");
            console.table(rows);
            firstQuestion();
        }
    })
};




async function newDepartment() {
    let deptAnswer = await inquirer.prompt([
        {
            name: "deptName",
            type: "input",
            message: "Please enter the name of the new department."
        }
    ]);

    connection.query(`INSERT INTO department SET ?`, {
        dept_name: deptAnswer.deptName
    });

    console.log(`${deptAnswer.deptName} was added to departments`)
    firstQuestion();
};

async function addRole() {
    let deptChoices = await connection.promise().query(`SELECT * FROM Department`)

   

    let deptArray = [];
    for (let i = 0; i < deptChoices[0].length; i++) {  
        deptArray.push(deptChoices[0][i].dept_name)   
       
    }

   
    let userRole = await inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "Please enter name of new role"
        },
        {
            name: "salary",
            type: "input",
            message: "Please enter salary for this role"
        },
        {
            name: "department_id",
            type: "list",
            choices: deptArray 

        }

    ]);
    const deptId = await connection.promise().query('SELECT department_id FROM _Role WHERE department_id = ?', userRole.department);


    connection.query(`INSERT INTO _Role SET ?`, {
        title: userRole.title,                                        
        salary: userRole.salary,
        department_id: deptId[0][0].id

    });
   
    console.log(`${userRole.title} was successfully added to Roles!`)

    firstQuestion();
};

async function addEmployee() {
    let employeeRoleChoices = await connection.promise().query(`SELECT * FROM _Role`)

    let roleArray = [];
    for (let i = 0; i < employeeRoleChoices[0].length; i++) {
        roleArray.push(employeeRoleChoices[0][i].title)
        
    }

    let newEmployee = await inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "Please enter the first name of the new employee"
        },
        {
            name: "lastName",
            type: "input",
            message: "Please enter the last name of the new employee"

        },
        {
            name: "employee",
            type: "list",
            choices: roleArray

        },
    ]);
  
    const employeeRoleId = await connection.promise().query('SELECT department_id FROM _Role WHERE title = ?', newEmployee.employee);
   
    await connection.promise().query(`INSERT INTO employee SET ? `, {

        first_name: newEmployee.firstName,
        last_name: newEmployee.lastName,
        role_id: employeeRoleId[0][0].id,

    })
    console.log(`${newEmployee.firstName} + ${newEmployee.lastName} was successfully added to Employees!`)
    firstQuestion();

};

async function updateRole() {
    let employeeChoices = await connection.promise().query(`SELECT * FROM employee`);
    let employeeArray = [];
    console.log(employeeArray)
    let roleChoices = await connection.promise().query(`SELECT * FROM _Role`);
    let roleArray = [];
    for (let i = 0; i < employeeChoices[0].length; i++) {
        employeeArray.push(employeeChoices[0][i].last_name)
        for (let i = o; i < roleChoices[0].length; i++) {
            roleArray.push(roleChoices[0][i].title)

        }



    }

    let updatePrompt = await inquirer.prompt([

        {
            name: "userPick",
            type: "list",
            message: "Which employee would you like to update?",
            choices: employeeArray

        },
        {
            name: "newEmployeeRole",
            type: "list",
            message: "What is this employee's new role?",
            choices: roleArray

        }
    ]);
    await connection.promise().query(`UPDATE employee SET employee.role_id = ? WHERE employee.id = ?`, updatePrompt.newEmployeeRole);



};

