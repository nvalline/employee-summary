const inquirer = require('inquirer');

function welcomePrompt() {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'welcomeConfirm',
            message: 'Wecome! Would you like to enter an employee?'
        },
        {
            type: 'list',
            name: 'selectRole',
            message: 'Choose which role to add.',
            choices: ['Engineer', 'Intern', 'Manager'],
            when: (answers) => answers.welcomeConfirm
        }
    ])
}

module.exports = welcomePrompt;