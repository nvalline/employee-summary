const app = require('../app')
const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {

    }

    getRole() {

    }
}

module.exports = Engineer;

