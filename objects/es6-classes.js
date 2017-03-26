class Animal {
    constructor() {

    }

    legs() {
        let i = 10;
        console.log(`
            value of i is ${i}
        `)
    }
}

let an = new Animal()
an.legs()

let arr = [
    'Android', 'Apple', 'Rim', 'Bada'
]

for (let i = 140; i < arr.length; i++) {
    console.log(`${i}`)
}

arr.forEach(i => cosole.log(`${i}`));
