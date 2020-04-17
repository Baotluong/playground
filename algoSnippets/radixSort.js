//helpers
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num)/Math.pow(10, i)) % 10;
}

const digitCount = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const getMaxDigits = arr => {
  let maxDigits = 0;
  arr.forEach(num => {
    maxDigits = Math.max(maxDigits, digitCount(num));
  });

  return maxDigits;
}

const radixSort = arr => {
  const maxDigits = getMaxDigits(arr);
  
  for (let digit = 0; digit < maxDigits; digit++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      buckets[getDigit(arr[i], digit)].push(arr[i])
    }
    arr = buckets.flat();
  }

  return arr;
}

// console.log(getDigit(100001, 5));
// console.log(digitCount(1232))
// console.log(getMaxDigits([1,2,3,4324,234,52,53,53532]));
console.log(radixSort([1,2,3,4324,234,52,53,53532]));
