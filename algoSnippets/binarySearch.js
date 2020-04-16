const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const midpoint = Math.floor((right + left)/ 2);
    if (arr[midpoint] === target) return midpoint;
    if (target < arr[midpoint]) {
      right = midpoint - 1;
    } else {
      left = midpoint + 1;
    }
  }
  return -1;
}

console.log(binarySearch([0,1,2,3,4,5,6], 5));
console.log(binarySearch([2,5,6,9,13,15,30], 30));
console.log(binarySearch([0], 0));
