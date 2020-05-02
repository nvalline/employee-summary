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
        console.log('Engineer Prompts hit')
    }
}

// exports = employeePrompts;
// exports = engineerPrompts;