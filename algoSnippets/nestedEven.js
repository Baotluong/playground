function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!
  let result = 0;
  for (let value in obj) {
    if (typeof obj[value] === 'number' && obj[value] % 2 === 0) {
      result += obj[value];
    } else if (typeof obj[value] === 'object') {
      result += nestedEvenSum(obj[value]);
    }
  }
  return result;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));
