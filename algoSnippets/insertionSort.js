// function insertionSort(arr){
//     for(var i = 1; i < arr.length; i++){
//       var currentVal = arr[i];
//       for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//         arr[j+1] = arr[j]
//       }
//       arr[j+1] = currentVal;
//     }
//     return arr;
// }

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    var val = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > val; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = val;
  }
  return arr;
}

console.log(insertionSort([1,5,4,2,23,7,12,0]))
