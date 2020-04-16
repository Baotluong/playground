// function flatten(arr){
//   let result = [];

//   for (let ele of arr) {
//     if (Array.isArray(ele)) {
//       result = [...result, ...flatten(ele)];
//     } else {
//       result = [...result, ele];
//     }
//   }

//   return result;
// }

const flatten = (arr) => {
  let result = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      result = [...result, ...flatten(ele)];
    } else {
      result = [...result, ele];
    }
  }
  return result;
}

console.log(flatten([1, 2, 3, [4, 5] ]));
