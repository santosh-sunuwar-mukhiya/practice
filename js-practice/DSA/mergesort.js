// merge sort.

function mergeSort(numbers) {
    if (numbers.length <= 1) {
        return numbers;
    }

    let mid = Math.floor(numbers.length / 2);
    let leftHand = mergeSort(numbers.slice(0, mid));
    let rightHand = mergeSort(numbers.slice(mid));
    return merge(leftHand, rightHand);
}

function merge(leftHand, rightHand) {
    let leftPointer = 0;
    let rightPointer = 0;
    let result = [];
    while (leftPointer < leftHand.length && rightPointer < rightHand.length) {
        if (leftHand[leftPointer] < rightHand[rightPointer]) {
            result.push(leftHand[leftPointer]);
            leftPointer++;
        }else{
            result.push(rightHand[rightPointer]);
            rightPointer++;
        }
    }
    while (leftPointer < leftHand.length) {
        result.push(leftHand[leftPointer]);
        leftPointer++;
    }
    while (rightPointer < rightHand.length) {
        result.push(rightHand[rightPointer]);
        rightPointer++;
    }

    return result;
}

console.log(mergeSort([8, 6, 7, 5, 1, 2, 3, 4]));