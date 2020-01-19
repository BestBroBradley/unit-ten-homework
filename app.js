// Keep these lines; they're important!
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

inquirer
    .prompt([
        {
        message: "What's the Unit Manager's name?",
        name: "managername"
        },
        {
        message: "What's the manager's ID?",
        name: "managerid"
        },
        {
        message: "What's the manager's email?",
        name: "manageremail"
        },
        {
        message: "What's the manager's office number?",
        name: "manageroffnum"
        },
        {
        message: "What type of team member would you like to add?",
        name: "doNext",
        type: "list",
        choices: ["Engineer", "Intern", "I don't want to add anyone else."]
        },
    ]) .then (function (response) {
        if (response.doNext === "Engineer") {
        console.log ("Selected engineer")
        .prompt ([
            {
            message: "What's the engineer's name?",
            name: "name"
            },
            {
            message: "What's the engineer's ID?",
            name: "id"
            },
            {
            message: "What's the engineer's email?",
            name: "email"
            },
            {
            message: "What's the engineer's GitHub handle?",
            name: "github"
            },
            {
            message: "What type of team member would you like to add?",
            name: "doNext",
            type: "list",
            choices: ["Engineer", "Intern", "I don't want to add anyone else."]
            },
        ])
    
    } else if (response.doNext === "Intern") {
            console.log ("Selected intern")
            } else {
                console.log ("Selected no more")
                }
    })

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!

