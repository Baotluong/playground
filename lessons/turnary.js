// modulo %

// var remainder = 5 % 2;

// for (let i = 0; i < 20; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// ternary

var value = 5;
var condition = 0;

// if (condition === 2) {
//   value = value + 1;
// } else {
//   value--;
// }

value =
  condition === 2 ?
    ++value :
    condition === 1 ?
      'is 1' :
      'is not';

console.log(value);
