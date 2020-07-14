function areTheyEqual(tree) {
  // return true or false if all leaves are equal
  var target = null;
  var result = true;

  const helper = (tree) => {
    if (result === false) return;
    for (let key in tree) {
      const value = tree[key];
      if (typeof value === 'object') {
        helper(value);
      } else {
        if (target === null) {
          target = value;
        } else {
          if (value !== target) {
            result = false;
            return;
          }
        }
      }
    }
  }
  helper(tree);
  return result;
}

const exampleTree = {
  a: 1,
  b: 1,
  c: {
    d2: 1,
    e2: {
      f3: 1,
    }
  },
  g: 1,
}

console.log(areTheyEqual(exampleTree)) // true
