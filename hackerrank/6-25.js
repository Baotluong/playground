const compareTriplets = (a, b) => {
  let results = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      results[0]++;
    } else if (a[i] < b[i] ) {
      results[1]++;
    }
  }
  return results;
}

console.log(compareTriplets([1,2,3], [3,2,1]));
console.log(compareTriplets([17,28,30], [99,16,8]));
