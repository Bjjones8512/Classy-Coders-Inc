const {Employees} = require('./Employees')

class SoftwareEngineer extends Employees {
    #programmingLanguges

    constructor(name, position, salary, programmingLanguges = []) {
        super(name, position, salary)
        this.#programmingLanguges = programmingLanguges
    }

    getProgrammingLanguges() {
        return this.#programmingLanguges
    }

    setProgrammingLanguages(languge) {
        this.#programmingLanguges.push(languge)
    }
}

module.exports = {
    SoftwareEngineer,
}