// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// function someRecursive(array, fn){
//   // add whatever parameters you deem necessary - good luck!
//   if (array.length === 0) return [];
//   const result = [];
//   const element = array.pop();
//   if(fn(element)) result.push(element);
//   return [...someRecursive(array, fn), ...result];
// }

const someRecursive = (array, fn) => {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0) return false;
  const element = array.pop();
  return someRecursive(array, fn) || fn(element);
}

console.log(someRecursive([1,2,3,4], isOdd));
console.log(someRecursive([2,4], isOdd));
console.log(someRecursive([], isOdd));
console.log(someRecursive([1,2,3,4], ele => ele > 5));
console.log(someRecursive([1,2,3,4], ele => ele > 3));
