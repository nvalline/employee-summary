const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {

    }

    printInfo() {
        console.log(`Name: ${this.name}, ID: ${this.id}, Email: ${this.email}, GitHub: ${this.github}`)
    }
}

module.exports = Employee;