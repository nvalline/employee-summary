const app = require('../app')
const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;

function engineerPrompts() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter full name:',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter employee ID number:',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter employee email address:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter employee Github username:',
            name: 'github'
        }
    ])
        .then(answers => {
            console.log({ answers })
        })
}

module.exports = engineerPrompts;