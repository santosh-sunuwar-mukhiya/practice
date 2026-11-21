//Singleton object.

// const tinderUser = new Object(); // object creation using constructor.

// const tinderUser = {}
// tinderUser.name = 'Santosh';
// tinderUser.isLoggedIn = true;

// console.log(tinderUser);

const regularUser = {
    "name": {
        username:{
            firstname:"Sam",
            lastname:"Sunuwar",
        }
    }
}

console.log(regularUser["name"].username?.firstname);