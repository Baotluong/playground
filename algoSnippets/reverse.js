// const reverse = (str) => {
//   if (!str.length) return '';
//   return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
// }

const reverse = (str) => {
  if (str.length <= 1)  return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('m'));
console.log(reverse('powerball'));
