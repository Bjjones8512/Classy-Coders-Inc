const {Employees} = require('./Employees')

class Manager extends Employees{
    #employeesManaged
    constructor(name, position, salary, employeesManaged, department) {
        super(name, position, salary)
        this.department = department;
        employeesManaged = []
        this.#employeesManaged = employeesManaged;
    }
    getEmployeesManaged(){
        return this.#employeesManaged;
    }
    setEmployeesManaged(newEmployee) {
        this.#employeesManaged.push(newEmployee);
    }
}

module.exports = {
    Manager,
}
