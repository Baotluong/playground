const capitalizeFirst = (arr) => {
  if (!arr.length) return [];
  const str = arr.pop();
  return [...capitalizeFirst(arr), str[0].toUpperCase() + str.slice(1)];
}

console.log(capitalizeFirst(['car','taco','banana']));
