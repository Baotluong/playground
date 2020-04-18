const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const midpoint = Math.floor(arr.length/2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (arr, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr.length && j < arr2.length) {
    if (arr[i] < arr2[j]) {
      result.push(arr[i]);
      i++
    } else {
      result.push(arr2[j]);
      j++
    }
  }
  while (i < arr.length) {
    result.push(arr[i]);
    i++
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++
  }

  return result;
}

console.log(mergeSort([1,2,3,0,-1,4]));
