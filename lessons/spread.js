// const arr = [1, 2, 3, 4, 0, -1];

// const newArr = [5, ...arr];

// console.log(Math.max(...arr));
// console.log(newArr);

// let obj = {
//   bao: 1,
//   camille: '2',
//   graham: '3',
//   matt: '4',
//   nestedObj: {
//     moo: 'cow'
//   }
// };

// obj = {
//   ...obj,
//   matt: 5
// }

// console.log(obj)


const dothething = (func, ...args) => {
  args.forEach(thing => {
    func(thing);
  });
  // do the code
  if (callback) {
    callback();
  }
}

const zzz = (thing) => {
  const squared = thing * thing - 1;
  const stringit = squared.toString()
  console.log(stringit);
}

dothething(zzz, 1,2,2,3,3,4,4,1,5,5, 32,1,3,12,1223,12,3)

