const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { employeePrompts, engineerPrompts, internPrompts, managerPrompts, welcomePrompts } = require('./lib/prompts');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

async function init() {
    try {
        let employee;
        // let engineer;

        const welcomeAnswers = await welcomePrompts();

        if (welcomeAnswers.welcomeConfirm) {
            switch (welcomeAnswers.selectRole) {
                case 'Engineer':
                    employee = await employeePrompts();
                    const engineer = await engineerPrompts();
                    const newEngineer = new Engineer(employee.name, employee.id, employee.email, engineer.github);

                    newEngineer.printInfo();
                    break;
                case 'Intern':
                    employee = await employeePrompts();
                    const intern = await internPrompts();
                    const newIntern = new Intern(employee.name, employee.id, employee.email, intern.school);

                    newIntern.printInfo();
                    break;
                case 'Manager':
                    console.log('Manager Hit')
                    employee = await employeePrompts();
                    const manager = await managerPrompts();
                    const newManager = new Manager(employee.name, employee.id, employee.email, manager.officeNum);

                    newManager.printInfo();
                    break;
            }
        } else {
            console.log('No worries. Come back when you are ready to enter an employee!')
        }


    } catch (err) {
        console.log('init Error: ' + err)
    }
}

init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
