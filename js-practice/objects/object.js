// object literal

const BG = Symbol('bloodGroup');
const Myage = Symbol('A+')

const myData = {
    "name":"Santosh",
    surname: "Sunuwar Mukhiya",
    age:21,
    [BG]:Myage,
    greeting: function(){
        console.log(`My name is ${this.name}!`);
    }
};

// console.log(Myage);
// console.log(myData.greeting());
console.log(typeof myData[BG]);