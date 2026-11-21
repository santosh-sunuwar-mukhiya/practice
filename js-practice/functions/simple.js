
// function simpleCart(value1, value2, ...args) { //spread operator
//     console.log(value1, value2);
//     return args;
// }
//
// console.log(simpleCart(10, 20, 30, 100))


function handleObject(anyObject) {
    const parsedObject  = JSON.parse(anyObject)
    console.log("parsedObject", parsedObject)
    console.log(typeof parsedObject)
    console.log("JSON", anyObject);
    console.log(typeof(anyObject));
}

handleObject('{"name": "John", "age": 32}');
