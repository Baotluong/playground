const array = [1,2,3,4,4,5,2,3,32,2,3,3,3,4];
const num = 2;

const maxSum = (array, num) => {
  if (num > array.length) {
    return null;
  }

  let tempSum = 0;
  for (i = 0; i < num; i++) {
    tempSum += array[i];
  }
  let maxSum = tempSum;

  for (let i = 1; i < array.length - 1 - num; i++) {
    tempSum = tempSum - array[i - 1] + array[i + num];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSum(array, num));
