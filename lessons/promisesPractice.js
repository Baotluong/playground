const mainfunction = async () => {
  const waitThenLog = async (msg, waitTime) => {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, waitTime);
    });
    console.log(msg);
  }


 
  // // This goes one after the other
  const waitThenStartNext = async () => {
    await waitThenLog('a', 1000);
    await waitThenLog('b', 4000);
    await waitThenLog('c', 3000);
    await waitThenLog('d', 2000);
  } // e
  // 0 1   2 3 4 5 6 7 8 9 10
  // d 1 a 4 3 2 b     c    d

  // 0    1 5 8 10           11
  // ddd  a b c d dd 1 4 3 2

  await waitThenStartNext();

  // This all starts at the same time;
  waitThenLog('1', 1000); // a
  waitThenLog('2', 4000); // b
  waitThenLog('3', 3000); // c
  waitThenLog('4', 2000); // d
  // await new Promise((resolve, reject) => console.log('im done'));
  console.log('donedone')
}
mainfunction();
console.log('donedonedone')
