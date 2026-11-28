//
function binarySearch(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if(numbers[m] === target) {
            return m;
        }else if (numbers[m] > target) {
            r = m - 1;
        }else{
            l = m + 1;
        }
    }

    return -1;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)

console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));