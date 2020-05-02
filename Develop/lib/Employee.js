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
        return this.role = 'Employee';
    }

    printInfo() {
        console.log(`Name: ${this.name}, ID: ${this.id}, Email: ${this.email}`)
    }
}

module.exports = Employee;