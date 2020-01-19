// The Engineer class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email),
        this.github = github
        this.title = "Engineer"
    }
    getGithub() {
        return this.github
    }

    getRole() {
        return this.title
    }
}

// github (GitHub username)
// getGithub()
// getRole() (Overridden to return 'Engineer')

module.exports = Engineer;