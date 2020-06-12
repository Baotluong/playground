class Fish {
  constructor(name) {
    this.name = name;
    // this.birthday = new Date();
  }

  birthday = new Date();

  greet() {
    console.log(`Hi, I'm ${this.name}. My birthday is ${this.birthday}!`);
  }
}

class superFish extends Fish{
  constructor({ name, color }) {
    super(name);
    this.color = color;
  }
}

class superDuperFish extends superFish {
  constructor({ name, color }) {
    super({ name, color });
    this.cape = true;
  }

  greet() {
    console.log('im overriding you bitch')
  }
}

const joshFish = new Fish('Josh');
const mattFish = new Fish('Matt');
const baoFish = new superFish({ name: 'Bao', color: 'Red' });
const camilleFish = new superDuperFish({ name: 'Camille', color: 'Purple' });
// joshFish.greet();
// mattFish.greet();
// console.log('moo')

