const minSubArraylen = (array, target) => {
  let counter = Infinity;
  let start = 0;
  let end = 0;
  let subtotal = array[start] + array[end];

  while (end <= array.length) {
    if (subtotal < target) {
      end++;
      subtotal += array[end];
      counter ++;
    }
  }

  return counter;
}