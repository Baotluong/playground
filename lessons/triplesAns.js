// const triples= (array) => {
//   if (array.length < 3) return 0;
//   var sequence = [];
//   sequence.push(array.shift());
//   while (array.length > 0 ) {
//     if (sequence.length + array.length < 3) return 0;
    
//     if (array[0] === sequence[sequence.length - 1] + 1) {
//       sequence.push(array.shift());
//     }
//     else {
//       sequence = [array.shift()];
//     }
    
//     if (sequence.length === 3) return 1;
//   }
//   return 0;
// }

const triples = (array) => {
  if (array.length < 3) return 0;
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] + 1 === array[i + 1] && array[i + 1] + 1 === array[i + 2]) {
      return 1;
    }
  }
  return 0;
}

console.log(triples([3,1,2,3,5]));
console.log(triples([3,1,2,4]));
console.log(triples([2,3]));
