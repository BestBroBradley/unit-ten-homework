// The Engineer class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor (name, id, title, github) {
        super(name, id, title)
        this.github = github
    }
    getGithub() {

    }

    getRole() {

    }
}

// github (GitHub username)
// getGithub()
// getRole() (Overridden to return 'Engineer')

module.exports = Engineer;