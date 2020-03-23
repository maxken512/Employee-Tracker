const inquirer = require("inquirer")
const connection = require("./connection/connection")

inquirer
    .message("Welcome to the employee managemtent system")

    .prompt([
        {
            type: "list",
            message: "What would you like to do",
            name: "selection",
            choices: ["View Employees", "View Departments", "View Roles", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Delete Department", "Delete Role", "Delete Employee", "View Salary by Department"]
        }
    ]).then(result => {
        let selection = result.selection;
        //switch statement for functions
        switch (selection) {
            case "View Employees":
                viewEmployees();
                break;

            case "View Departments":
                viewDepartments();
                break;

            case "View Roles":
                viewRoles();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Add Role":
                addRole();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Update Employee Role":
                updateEmployeeRole();
                break;

            case "Delete Department":
                deleteDepartment();
                break;

            case "Delete Role":
                deleteRole();
                break;

            case "Delete Employee":
                deleteEmployee();
                break;

            case "View Salary By DEpartment":
                ViewDepSalary();
                break;
        };
    });
//view employees
const viewEmployees = () => {
    let query = "SELECT employee.id, employee.firstName, employee.lastName, position.roleTitle, department.department FROM employee INNER JOIN positino ON employee.role_id INNER JOIN department on position.department_id = department.id ORDER BY id asc;";
    connection.query(query, (err, data) => {
        if (err) throw err;
        console.table(data);
        restart();
    });
};
//view departments
const viewDepartments = () => {
    let query = "SELECT department.department FROM department;";
    connection.query(query, (err, data) => {
        if (err) throw err;
        console.table(data);
        restart();
    });
};
//view roles
const viewRoles = () => {
    let query = "SELECT position.roleTitle FROM postion;";
    connection.query(query, (err, data) => {
        if (err) throw err;
        console.table(data);
        restart();
    });
};
//add department
const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "what is the name of the department you would like to add?",
                name: "departmentName"
            }
        ]).then(result => {
            let query = "INSERT INTO department.department VALUES (?);";
            connection.query(query, [result.departmentName],
                function (err) {
                    if (err) throw err;
                    restart();
                });
        });
};
// add role
const addRole = () => {
    connection.query("SELECT department FROM DEPARTMENT", (err, data) => {
        if (err) throw err;
        let choices = []
        for (let i = 0; i < data.length; i++) {
            choices.push(data[i].department);
        };
    });
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of the role you would like to add?",
                name: "roleName"
            }, {
                type: "input",
                message: "What is the annual salary of this role?",
                name: "roleSalary"
            }, {
                type: "choices",
                message: "What department does this role belong to?",
                choices: choices,
                name: "roleDepartment"
            }
        ]).then(result => {
            const depName = choices.indexOf(result.roleDepartment) + 1;
            let query = "INSERT INTO position (roleTitle, salary, department_id) VALUES (?, ?, ?);";

            connection.query(query, [result.roleName, result.roleSalary, depName],
                function (err) {
                    if (err) throw err;
                    restart();
                })
        })
}


//add employee
const addEmployee = () => {
    if (err) throw err;
    let choices = []
    for (let i = 0; i < data.length; i++) {
        choices.push(data[i].title);
    }
    inquirer
        .prompt([
            {
                type: "input",
                message: "what is the first name of the employee you would like to add?",
                name: "empFirstName"
            }, {
                type: "input",
                message: "What is the employee's last name?",
                name: "empLastName"
            }, {
                type: "list",
                message: "what is this employee's role?",
                name: "employeeRole"
            }, {
                type: "input",
                message: "who is this employees manager?",
                name: "employeeManager"
            }
        ]).then(result => {
            const roleId = choices.indexOf(result.employeeRole) + 1;
            let query = "INSERT INTO employee (firstName, lastName, role_id, manager_id) VALUES ( ?, ?, ?, ?);";
            connection.query(query, [result.empFirstName, result.empLastName, roleId, null],
                function (err) {
                    if (err) throw err;
                    restart();
                });
        })
}
//update employee role
const updateEmployeeRole = () => {
    connection.query("SELECT CONCAT (firstName, '', lastName) AS name FROM employee;", (err, data) => {
        if (err) throw err;
        let roleTitles = []
        for (let i = 0; i < data.length; i++) {
            roleTitles.push(data[i].title);
        };
        connection.query("SELECT roleTitle FROM position;", (err, data) => {
            if (err) throw err;
            let choices = []
            for (let i = 0; i < data.length; i++) {
                chioces.push(data[i].title);
            };
            inquirer
                .prompt([
                    {
                        type: "list",
                        message: "Which employee role would you like to update?",
                        name: "updateRole",
                        choices: choices
                    }, {
                        type: "list",
                        message: "Select the employees' new role.",
                        name: "roleTitle",
                        choices: "roleTitles"
                    },
                ]).then(result => {
                        const roleId = roleTitles.indexOf(result.roleTitle) + 1;
                        console.log(roleId);

                        let query = "UPDATE employee SET role_id = (?) WHERE CONCAT(first_name, ' ', last_name) = (?);";
                        connection.query(query, [roleId, result.updateRole], (err, data) => {
                            if (err) throw err;
                            restart();
                        });
                    })
         
        });
})};
//delete dept
const deleteDepartment = () => {

}
    //delete role
    const deleteRole = () => {

    }
    //delete employee
    const deleteEmployee = () => {

    }
    //view salary by dept
    const ViewDepSalary = () => {

    }