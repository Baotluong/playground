const search = (str, pattern) => {
  let count = 0;
  for (let i = 0; i < str.length - pattern.length; i++){
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) {
        break;
      } else if (j === pattern.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(search('ow', 'wow'));

