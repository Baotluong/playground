
function areTheyEqual(tree) {
  let leafArr = Object.values(tree);
  // console.log(leafArr);

  for (let i = 0; i < leafArr.length; i++) {
    if (isNaN(leafArr[i])) {
      leafArr[i] = Object.values(leafArr[i]);
      leafArr = leafArr.flat();
      // console.log(leafArr);
    }
  }
  
  let leafSize = leafArr[0];

  for (const element of leafArr) {
    if (element !== leafSize) { return false }
  }

  return true;
}

const exampleTree = {
  a: 1,
  b: 1,
  c: {
    d2: 1,
    e2: {
      f3: 1,
      g3: 1,
    },
  },
  h: 1
}

console.log(areTheyEqual(exampleTree));
