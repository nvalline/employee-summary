const inquirer = require('inquirer');

module.exports = {
    employeePrompts: () => {
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
            }
        ]);
    },

    engineerPrompts: () => {
        return inquirer.prompt([
            {
                type: 'input',
                message: "Enter engineer's github username:",
                name: 'github'
            }
        ])
    },

    welcomePrompts: () => {
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
}

// exports = employeePrompts;
// exports = engineerPrompts;