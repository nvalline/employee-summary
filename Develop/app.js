const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const collectEmployees = require('./lib/prompts');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let htmlRender;

const mainPrompts = async () => {
    const newEmployees = [];
    const employees = await collectEmployees();

    for (const employee of employees) {
        switch (employee.selectRole) {
            case 'Engineer':
                const newEngineer = new Engineer(employee.name, employee.id, employee.email, employee.github);

                newEmployees.push(newEngineer);
                break;
            case 'Intern':
                const newIntern = new Intern(employee.name, employee.id, employee.email, employee.school);

                newEmployees.push(newIntern);
                break;

            case 'Manager':
                const newManager = new Manager(employee.name, employee.id, employee.email, employee.officeNumber);

                newEmployees.push(newManager);
                break;
        }
    }

    htmlRender = await render(newEmployees);
}


function startPrompt() {
    return inquirer.prompt([
        {
            type: 'confirm',
            message: 'Welcome! Would you like to enter an employee?',
            name: 'start'
        }
    ]);
}

const init = async () => {
    const firstPrompt = await startPrompt();

    if (firstPrompt.start) {
        await fs.access('./output', function (err) {
            if (err) {
                fs.mkdirSync(OUTPUT_DIR);
            }
        })

        await mainPrompts()

        fs.writeFile(outputPath, htmlRender, err => {
            if (err) throw err;
            console.log('==========================')
            console.log('File Written Successfully!')
            console.log("Open 'team.html' in your browser to view your team.")
        });
    } else {
        console.log('No worries. Come back when you are ready to add an employee.')
    }
}

init();
