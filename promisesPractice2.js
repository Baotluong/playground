let promise = new Promise((resolve, reject) => {
  const answer = 1;

  if (answer) {
    resolve('resolved');
  } else {
    reject('rejected');
  }
});

promise.then((val) => {
  console.log(val);
}).catch((err) => {
  console.log(err);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000);
  // resolve();
});

// What happens?
promise2.then(() => {
  console.log('resolved2');
}).catch(() => {
  console.log('rejected2');
});

Promise.all([promise, promise2]).then(() => {
  console.log('We all did it together.');
}).catch(() => {
  console.log('Someone fucked up.');
});

console.log('I go');

var x = 'placeholder';
