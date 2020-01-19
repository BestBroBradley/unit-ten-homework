// The Manager class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor (name, id, email, officeNumber, teamName) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.title = "Manager"
        this.teamName = teamName
    }
    
    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return this.title
    }

    getTeamName () {
        return this.teamName
    }

}

// officeNumber
// getRole() (Overridden to return 'Manager')

module.exports = Manager;