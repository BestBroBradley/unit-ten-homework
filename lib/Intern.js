// The Intern class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor (name, id, title, school) {
        super(name, id, title)
        this.school = school
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return ("Intern")
    }
}

// school
// getSchool()
// getRole() (Overridden to return 'Intern')

module.exports = Intern