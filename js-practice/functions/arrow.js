// This and Arrow functions.

// console.log(this) // returns empty array.

const user = {
    name: 'Santosh',
    age: 21,
    welcome: function() {
        console.log(`Welcome, ${this.name}!`);
        console.log(this)  // this returns the current context(Returns the user object here).
    },
    greet: () => {
        console.log(`Hello, ${this.name}!`);
    }
}

user.welcome();
user.greet();

// function myFunc(){
//     let username = 'Sam'
//     console.log(this); // It returned undefined.
// }
// myFunc();

// const result = () => {
//     let username = 'Sam'
//     console.log(this); // returns function name [Function: result] when this.username
// }
//
// console.log(result);

// const result = () => {
//     console.log(this);
// }
// console.log(result);


