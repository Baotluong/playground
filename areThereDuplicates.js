// const areThereDuplicates = (...args) => {
//   const map = {};
//   for (let element of args) {
//     if (map[element]) {
//       return true;
//     } else {
//       map[element] = 1;
//     }
//   }

//   return false;
// }

const areThereDuplicates = (...args) => {
  args.sort();
  console.log(args)
  for (let i = 1; i < args.length; i++) {
    if (args[i] === args[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(areThereDuplicates(1,2,32,3,43,5,4));
console.log(areThereDuplicates(1,2,32,3,43,5,1));