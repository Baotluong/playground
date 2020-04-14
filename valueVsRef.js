// let moo = 'moo';
// let bark = moo;
// bark = 'dog';

// console.log(moo);
// console.log(bark);

const animals = {
  cow: 'moo',
};

const animals2 = {
  cow: 'moo',
};

const copy = animals;

if (animals === animals2) {
  console.log('we da same');
} else {
  console.log('nah');
}

// const example = 'my name is bao';

// const changeCow = (obj, value) => {
//   let moo = obj.cow;
//   moo += '!';
//   console.log(moo);
//   // obj.cow = 'bark';

//   value = 'my name is Mark';
// }

// console.log(animals.cow);
// console.log(example);
// changeCow(animals, example);
// console.log(animals.cow);
// console.log(example);
