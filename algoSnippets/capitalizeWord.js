const capitalizeWords = (arr) => {
  if (arr.length === 0) return [];
  const str = arr.pop().toUpperCase();
  return [...capitalizeWords(arr), str];
}

let words = ['i', 'am', 'learning', 'recursion'];
// let words = [];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']