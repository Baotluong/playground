
const waitThenLog = async (msg, waitTime) => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, waitTime);
  });
  console.log(msg);
}

// This all starts at the same time;
waitThenLog('1', 1000);
waitThenLog('2', 4000);
waitThenLog('3', 5000);
waitThenLog('4', 2000);

// This goes one after the other
const waitThenStartNext = async () => {
  await waitThenLog('a', 1000);
  await waitThenLog('b', 4000);
  await waitThenLog('c', 5000);
  await waitThenLog('d', 2000);
}

waitThenStartNext();
