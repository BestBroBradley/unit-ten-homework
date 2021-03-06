// The Intern class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school
        this.title = "Intern"
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.title
    }
}

// school
// getSchool()
// getRole() (Overridden to return 'Intern')

module.exports = Intern