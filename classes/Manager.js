const {Employees} = require('./Employees')

class Manager extends Employees{
    #employeesManaged
    constructor(name, position, salary, department) {
        super(name, position, salary)
        this.department = department;
        this.#employeesManaged = [];
    }
    getEmployessManaged() {
        return this.#employeesManaged;
    }
    setEmployessManaged(newEmployee) {
        this.#employeesManaged.push(newEmployee);
    }
}

module.exports = {
    Manager,
}
