// reduce
const arr = ['', '1o0', 'moo1', 'moo2', 'boo', 'hi'];

const reduced = arr.reduce((total, current) => {
  return total + current[0];
})

// console.log(reduced);

// console.log('word'[0]);

// indexOf regular expression
const arr2 = [1, 29, 29, 10, 2, 199]
const find = arr2.find(ele => {
  return ele > 20;
})
console.log(find);


console.log(arr2.push(200));
console.log(arr2.pop());
console.log(arr2.shift());
console.log(arr2.unshift(-Infinity));
console.log(arr);

// MDN


