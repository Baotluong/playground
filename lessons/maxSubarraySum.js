function maxSubarraySum(arr, num){
  if (arr.length < num) {
    return null;
  }

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  let subTotal = total;
  for (let i = num; i < arr.length; i++) {
    subTotal += arr[i] - arr[i - num];
    total = Math.max(subTotal, total);
  }
  return total;
}

console.log(maxSubarraySum([1,2,3,4,5], 2));
console.log(maxSubarraySum([1,2,7,4,5], 3));
