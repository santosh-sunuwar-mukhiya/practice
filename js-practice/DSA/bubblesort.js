function bubbleSort(numbers) {
    // Write your logic here
    for(let i = 0; i < numbers.length -1 ; i++){
        for (let j = 0; j < numbers.length - i - 1; j++){
            if (numbers[j] > numbers[j+1]){
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }
    return numbers;
}

const numbers = [5, 3, 8, 1, 2];

console.log(bubbleSort(numbers));