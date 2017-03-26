let car = {
    name : 'audi',
    mlg : function() {
        return 10;
    },
    mlgv2 : () => 10 // lambda or fat arrows
};

car.mlg();

let i = 10;

if(true) {
    let i = 20;
}
console.log('value of i is '+i);