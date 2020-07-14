let promise = new Promise((resolve, reject) => {
  // to something async
  const answer = 1;
  if (answer) {
    resolve(answer);
  } else {
    reject(answer);
  }
});

// promise.then((val) => {
//   console.log(val);
// }).catch((err) => {
//   console.log(err);
// });

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('moo') }, 5000);
  // resolve();
});

// // What happens?
// promise2.then((resolve) => {
//   console.log(resolve);
//   console.log('resolved2');
// }).catch((err) => {
//   console.log(err)
//   console.log('rejected2');
// });

Promise.all([promise, promise2])
  .then((res) => {
    console.log(res)
    console.log('We all did it together.');
  }).catch(() => {
    console.log('Someone fucked up.');
  });

console.log('I go');

// var x = 'placeholder';
