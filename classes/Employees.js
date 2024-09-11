class Employees {
  #salary;
  #isHired;
  static allEmployees = [];
  constructor(name, position, salary, isHired) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    isHired = true;
    this.#isHired = isHired;
    Employees.allEmployees.push(this);
  }//test

  getSalary() {
    console.log(this.#salary);
    return this.#salary;
  }
  setSalary(amount) {
    this.#salary = amount;
  }
  getStatus() {
    return this.#isHired;
  }

  setStatus(command) {
    if (command === "fire") {
      this.#isHired = false;
      return this.#isHired;
    }
  }
  static getEmployees() {
    return Employees.allEmployees;
  }
  static getTotalPayroll() {
    let totalSalaries = 0;
    for (let i = 0; i < Employees.allEmployees.length; i++) {
      totalSalaries += Employees.allEmployees[i].getSalary();
    }
    return totalSalaries;
  }
}

module.exports = Employees;
