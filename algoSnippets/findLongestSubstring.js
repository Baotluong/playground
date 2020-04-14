// const findLongestSubstring = (str) => {
//   let start = 0;
//   let cache = {};
//   let longest = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (cache[str[i]]) {
//       start = Math.max(start, cache[str[i]]);
//     }

//     longest = Math.max(i - start + 1, longest);
//     cache[str[i]] = i + 1;
//   }
//   return longest;
// }

function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1;
  }

  return longest;
}

console.log(findLongestSubstring('iamthecoilest'));
console.log(findLongestSubstring('hello'));
console.log(findLongestSubstring('aabbcdefghijkl'));