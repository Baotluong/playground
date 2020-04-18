const inputString = process.argv[2];
const reverseString = (forwardString) => {
    const array = forwardString.split('');
    for (i = 0; i < array.length / 2; i++) {
        var temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }

    return array.join('');
}

console.log(reverseString(inputString));

// input : 'hi'
// output: 'ih'
// console.log it

