const { prompt } = require("inquirer")
const logo = require("asciiart-logo")
const db = require("./db/db_queries.js")
require("console.table")

// Add Employee
async function addEmployee() {
    const roles = await db.getRoles()
    const employees = await db.getEmployees()

    const employee = await prompt([
        {
            name: "first_name",
            message: "First name: "
        },
        {
            name: "last_name",
            message: "Last name: "
        }
    ])

    const roleChoices = roles.map(({ id, role }) => ({
        name: role,
        value: id
    }))

    const { roleID } = await prompt({
        type: "list",
        name: "roleID",
        message: "Role: ",
        choices: roleChoices
    })

    employee.role_id = roleID

    const managerChoices = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }))
    managerChoices.unshift({ name: "None", value: null }) // prepend to array

    const { managerID } = await prompt({
        type: "list",
        name: "managerID",
        message: "Manager: ",
        choices: managerChoices
    })

    employee.manager_id = managerID

    await db.addEmployee(employee)

    console.log(
        `Successfully Successfully added ${employee.first_name} ${employee.last_name}.`
    )

    prompts()
}

// Add role
async function addRole() {
    const departments = await db.getDepartments()

    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
    }))

    const role = await prompt([
        {
            name: "role",
            message: "What is the name of the role?"
        },
        {
            name: "salary",
            message: "What is the salary of the role?"
        },
        {
            type: "list",
            name: "department_id",
            message: "Which department does the role belong to?",
            choices: departmentChoices
        }
    ])
    await db.addRole(role)

    console.log(`Successfully added ${role.title} to the database`)

    prompts()
}

// Add Department
async function addDepartment() {
    const department = await prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ])

    await db.addDepartment(department)

    console.log(`Successfully added ${department.name} to the database`)

    prompts()
}

// Get Roles
async function getRoles() {
    const roles = await db.getRoles()
    console.log("\n")
    console.table(roles)

    prompts()
}

// Get Employees
async function getEmployees() {
    const employees = await db.getEmployees()
    console.log("\n")
    console.table(employees)

    prompts()
}

// Get Departments
async function getDepartments() {
    const departments = await db.getDepartments()
    console.log("\n")
    console.table(departments)

    prompts()
}

// Update Role
async function updateEmployeeRole() {
    const employees = await db.getEmployees(); //dfgfg
  
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));
  
    const { employeeId } = await prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Which employee's role do you want to update?",
        choices: employeeChoices
      }
    ]);
  
    const roles = await db.getRoles();
  
    const roleChoices = roles.map(({ id, title }) => ({
      name: title,
      value: id
    }));
  
    const { roleId } = await prompt([
      {
        type: "list",
        name: "roleId",
        message: "Which role do you want to assign the selected employee?",
        choices: roleChoices
      }
    ]);
  
    await db.updateRole(employeeId, roleId);
  
    console.log("Updated employee's role");
  
    prompts();
  }

// Using ascii art
function init() {
    const logoText = logo({name: "Employee Manager"}).render()

    console.log(logoText)

    prompts()
}

async function prompts() {
    const { choice } = await prompt([
        {
            type: "list",
            name: "choice",
            message: "Choose what you want to do.",
            choices: [
                {
                    name: "Add employee.",
                    value: "addEmployee"
                },
                {
                    name: "Add role.",
                    value: "addRole"
                },
                {
                    name: "Add department.",
                    value: "addDepartment"
                },
                {
                    name: "View employees.",
                    value: "getEmployees"
                },
                {
                    name: "View all roles.",
                    value: "getRoles"
                },
                {
                    name: "View all departments.",
                    value: "getDepartments"
                },
                {
                    name: "Update employee's role.",
                    value: "updateRole"
                },
                {
                    name: "end",
                    value: "end"
                }
            ]
        }
    ])

    // Returns db results
    switch (choice) {
        case "addEmployee":
            return addEmployee()
        case "addRole":
            return addRole()
        case "addDepartment":
            return addDepartment()
        case "getRoles":
            return getRoles()
        case "getEmployees":
            return getEmployees()
        case "getDepartments":
            return getDepartments()
        case "updateRole":
            return updateEmployeeRole()
        default:
            return end()
    }
}

function end() {
    console.log("Bye!")
    process.exit()
}

init()
