const inquirer = require('inquirer');

const collectEmployees = async (employees = []) => {
    const prompts = [
        {
            type: 'input',
            message: 'Enter full name:',
            name: 'name',
            validate: async (name) => {
                if (name !== "") {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'input',
            message: 'Enter employee ID number:',
            name: 'id',
            validate: async (name) => {
                if (name !== "") {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'input',
            message: 'Enter employee email address:',
            name: 'email',
            validate: async (name) => {
                if (name !== "") {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'list',
            name: 'selectRole',
            message: 'Choose which role to add:',
            choices: ['Engineer', 'Intern', 'Manager']
        },
        {
            type: 'input',
            message: 'Enter Github Username:',
            name: 'github',
            when: answers => answers.selectRole === 'Engineer',
            validate: async (name) => {
                if (name !== "") {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'input',
            message: 'Enter school name:',
            name: 'school',
            when: answers => answers.selectRole === 'Intern',
            validate: async (name) => {
                if (name !== "") {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'input',
            message: 'Enter office number:',
            name: 'officeNumber',
            when: answers => answers.selectRole === 'Manager',
            validate: async (name) => {
                if (name !== "") {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'confirm',
            message: 'Enter another Employee?',
            name: 'again',
            default: true
        }
    ];

    const { again, ...answers } = await inquirer.prompt(prompts);

    const newEmployees = [...employees, answers];

    return again ? collectEmployees(newEmployees) : newEmployees;
};

module.exports = collectEmployees;

