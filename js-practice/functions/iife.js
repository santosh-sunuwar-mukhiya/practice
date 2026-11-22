// Immediately Invoked Function Expression (IIFE) => It is the way of writing function when you want to avoid the pollution of global scopes and want to immediately invoke the function after creating it.
//An Immediately Invoked Function Expression (IIFE) is a function expression that is executed immediately after it is defined. It creates its own scope, helping prevent variables declared inside it from polluting the surrounding scope.
// named IIFE
(function sam(name){
    console.log(`My name is ${name}`);
})("Samuel"); // must terminate the IIFE with semicolon to stop the function.

// regular IIFE
(
    ()=>{
        console.log('Test')
    }
)();