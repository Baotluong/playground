const inputString = [1, 2, 3, 4, 5];
const reverseArrayOfNumber = (array) => {
    for (i = 0; i < Math.floor(array.length / 2); i++) {
        array[i] = array[i] + array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i] - array[array.length - 1 - i];
        array[i] = array[i] - array[array.length - 1 - i];
    }

    return array;
}

console.log(reverseArrayOfNumber(inputString));

// input : 'hi'
// output: 'ih'
// console.log it