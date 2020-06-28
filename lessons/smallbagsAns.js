// const smallbags = (big, small, goal) => {
//   if ((big * 5) + (small * 1) < goal) {
//     return -1;
//   }

//   // let smallBagsNeeded = goal - big * 5;
//   // let smallBagsNeeded = goal % 5;
//   if (goal < big * 5) {
//     smallBagsNeeded = goal % 5;
//   } else {
//     smallBagsNeeded = goal - big * 5;
//   }

//   if (smallBagsNeeded > small) {
//     return -1;
//   }
//   return smallBagsNeeded;
// }

// const smallbags = (big, small, goal) => {
//   while (big > 0 && goal >= 5) {
//     goal = goal -5;
//     big--;
//   }

//   return small < goal ? -1 : goal;
// }

const smallbags = (big, small, goal) => {
  const bigsNeeded = Math.min(Math.floor(goal / 5), big);
  const left = goal - 5 * bigsNeeded;
  return left > small ? - 1 : left;
}

console.log(smallbags(5, 5, 9));
console.log(smallbags(0, 15, 9));
console.log(smallbags(1, 15, 9));
console.log(smallbags(1, 15, 14));
