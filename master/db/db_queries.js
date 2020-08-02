const connection = require("./connection");

class Company {
    constructor(connection) {
        this.connection = connection;
    }


    // Add employees, roles, and departments.
    addEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
    }

    addRole(role) {
        return this.connection.query("INSERT INTO role SET ?", role);
    }

    addDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department);
    }

    // View tables.


    // Update records. 
    
}

module.exports = new Company(connection);