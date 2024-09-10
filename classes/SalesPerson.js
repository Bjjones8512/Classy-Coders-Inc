const { Employees } = require("./Employees")

class SalesPerson extends Employees {
    #totalSales = 0

    constructor(name, position, salary, clients  = []) {
        super(name, position, salary)
        this.clients = clients
    }

    getSalesNumber() {
        return this.#totalSales
    }

    makeSale(amount) {
        this.#totalSales += amount
    }

    findClient(client) {
        this.clients.includes(client) ?
        client : null
    }
}

module.exports = {
    SalesPerson,
}