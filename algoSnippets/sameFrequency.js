const sameFreq = (num1, num2) => {
  const map1 = charMapMe(num1.toString());
  const map2 = charMapMe(num2.toString());

  for (let digit in map1) {
    if (map1[digit] !== map2[digit]) {
      return false;
    }
  }

  return true;
}

const charMapMe = (str) => {
  const map = {};

  for (let char of str) {
    map[char] = map[char] ? ++ map[char] : 1;
  }
  return map;
}

console.log(sameFreq(581, 185));
console.log(sameFreq(581, 186));
console.log(sameFreq(581, 1855));

