const maxSum = (array, size) => {
  if (size > array.length) {
    return null;
  }

  let total = 0;
  for (let i = 0; i < size; i++) {
    total += array[i];
  }
  let subtotal = total;

  for (let i = size; i < array.length; i++) {
    subtotal = subtotal + array[i] - array[i - size];
    total = Math.max(total, subtotal);
  }
  return total;
}


console.log(maxSum([100, 200, 10, 400], 2));