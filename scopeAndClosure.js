// var outside = 'moo';
// const outside2 = 'moo2';

// function func () {
//   var inside = 'moo';
//   console.log(outside);
// };

// func();
// console.log(inside);

function createGreeter(greeting) {
  const func = (name) => {
    console.log(greeting + ', ' + name);
  }
  return func;
}

const hello = createGreeter('yo');
hello('bao');
