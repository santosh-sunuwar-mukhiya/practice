// Linear Search.

function linearSearch(numbers, target){
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === target){
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 4));
console.log(linearSearch([1, 2, 3, 4, 5], 14));