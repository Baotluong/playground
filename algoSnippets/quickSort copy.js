
function pivot1(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, id1, id2) => {
    const temp = arr[id1];
    arr[id1] = arr[id2];
    arr[id2] = temp;
  }

  let pivot = arr[start];
  let pivotId = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotId++;
      swap(arr, i, pivotId);
    }
  }

  swap(arr, pivotId, start);
  return pivotId;
}

function quickSort2(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right) //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotPoint = pivot(arr, left, right);

    quickSort(arr, left, pivotPoint - 1);
    
    quickSort(arr, pivotPoint + 1, right);
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




