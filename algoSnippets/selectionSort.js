const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      if (min !== i) {
        const temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
      }
    }
  }
  console.log(arr);
}

selectionSort([23,45,1,24,8,0,-1]);
