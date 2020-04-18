const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, i1, i2) => {
    const temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }

  let pivot = arr[start];
  let swapix = start;
  
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapix++;
      swap(arr, swapix, i);
    }
  }
  swap(arr, start, swapix);
  return swapix;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotpt = pivot(arr, left, right);

    quickSort(arr, left, pivotpt - 1);
    quickSort(arr, pivot + 1, right);
  }
  
  return arr;
}

const arr = [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23];
quickSort(arr)
console.log(arr);




// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1




