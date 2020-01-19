// The Manager class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor (name, id, title, github) {
        super(name, id, title)
        this.github = github
    }
    getRole() {

    }
}

// officeNumber
// getRole() (Overridden to return 'Manager')

module.exports = Manager;