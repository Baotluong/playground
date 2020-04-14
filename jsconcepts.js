var counter = 0;

var string = 'i am string';

var bool = true;
bool = false;

var x;
x = null;

function nameOfFunction(parameters) {
  // does things
  const moo = 'moo';
}

nameOfFunction('somethings');

const increaseCounter = () => {
  counter = counter + 1;
  return counter
  // does things
}

// Object
var cowThings = {
  moo: 'cow',
  deepCow: {
    moo: 'moo moo'
  },
  func: increaseCounter,
}

// Array
var numbers = [1, 2, 3, increaseCounter, cowThings];

class Person {
  constructor(nameParameter, ageParam) {
    this.name = nameParameter;
    this.age = ageParam * 2;
  }

  sayHi() {
    return `my name is ${this.name}`
  }
}

const matt = new Person('matt', 21);

const graham = new Person('graham', 14);
console.log()