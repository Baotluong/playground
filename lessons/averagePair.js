const averagePair = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === target * 2) {
      return true;
    }
    if (sum < target * 2) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 2.1))
