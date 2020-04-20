// TODO: why can you change const arrays and objects

const array = []; // fdshlkdsffdsjkjs ponter dlsflkja pointers  
const object = {}; 

array.push(1);
object.data = 'moo';

// ???
// array = object;

// console.log(array);
// console.log(object);


// !!

const state = {
  listOfData: 'im here',
};

// _______ && doesnt run
// !!state.listOfData && console.log('moo')

// if (true || console.log('im in the if')) {
//   console.log('im inside');
// }


// Arrays
const arr = ['a', 'b', 'c', 'd', 'e'];

// map transforming elements in an array
const mapped = arr.map((value, index, array) => {
  // console.log('working on ', index);
  // console.log(array)
  return { [value]: value.toString()};
});

// console.log(arr);
// console.log(mapped);

// Filter
const prefilter2 = [
  { name: 'matt',
    gender: true,
  },
  { name: 'camille',
    gender: false,
  },
  { name: 'graham',
    gender: true,
  },
]

const filtered2 = prefilter2.filter(customer => {
  return !customer.gender
});

console.log(filtered2);

// const prefilter = [1, 23, 54, 6, 8, 0, 29];
// const filtered = prefilter.filter((value) => {
//   return Math.pow(value, 5) % 2 === 0;
// });

// console.log(filtered);

