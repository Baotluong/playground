this.moo = 'moo';

const es6 = () => {
  console.log(this.moo);
}

function es5() {
  this.moo = 'not moo';
  console.log(this.moo);
  es6();
}

es5();
// lexical scope
// function es5 ?