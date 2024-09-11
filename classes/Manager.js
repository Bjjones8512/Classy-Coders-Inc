const {Employees} = require('./Employees')

class Manager extends Employees {
  #employeesManaged;
  constructor(name, position, salary, department) {
    super(name, position, salary);
    this.department = department;
    this.#employeesManaged = [];
  }
  getEmployeesManaged() {
    return this.#employeesManaged;
  }
  setEmployeesManaged(newEmployee) {
    this.#employeesManaged.push(newEmployee);
  }
}

module.exports = Manager;
