class Car {
    constructor(
        private name?: string,
        private cost?: number
    ) {
    }
    getCost(): number { return this.cost; }
}

let car: Car = new Car('Audi')
car = new Car('Audi', 4)
car = new Car()

let date  = new Date()
