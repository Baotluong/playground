const minSubarrayLen = (array, target) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < array.length) {
    if (total < target && end < array.length) {
      total += array[end];
      end++;
    } else if (total >= target) {
      minLen = Math.min(minLen, end - start);
      total -= array[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubarrayLen([2,3,1,2,4,3], 7));