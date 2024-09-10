const { Employees } = require("./Employees")

class SoftwareEngineer extends Employees {
    #programmingLanguges

    constructor(name, position, salary, programmingLanguges = []) {
        super(name, position, salary)
        this.#programmingLanguges = programmingLanguges
    }

    getProgrammingLanguages() {
        return this.#programmingLanguges
    }

    setProgrammingLanguages(language) {
        this.#programmingLanguges.push(language)
    }
}

module.exports = {
    SoftwareEngineer,
}