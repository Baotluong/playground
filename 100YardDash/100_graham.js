let numOfPlayers = 2;
let numOfPlayersFinished = 0;

const playerGen = (draftOrder, finished, yardLine, playerNumber) => {
  return {
    draftOrder,
    finished,
    yardLine,
    playerNumber,
  };
}

const playerOne = playerGen(0, false, 0, 'One');
const playerTwo = playerGen(0, false, 0, 'Two');

const randomRun = () => { 
  return Math.floor(Math.random() * 10) + 1;
};

const timeDelay = () => {
  return Math.floor(Math.random() * 6000) + 1000;
};

let playerRun = (player) => {
  if (player.yardLine < 100) {
    player.yardLine = player.yardLine + randomRun();
    console.log(`Player ${player.playerNumber} is at the ${player.yardLine} yard line.`);
    if (player.yardLine >= 100) {
      numOfPlayersFinished++;
      player.draftOrder = numOfPlayersFinished;
      console.log('Player ' + player.playerNumber + ' finished in spot ' + numOfPlayersFinished);
      player.finished = true;
    }
  }
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// deconstructing
async function sleep(fn, ...args) {
  await timeout(timeDelay());
  return fn(...args);
}

const startRace = async () => {
  do {
    if (playerOne.finished !== true) {
      await sleep(playerRun, playerOne);
    }
    if (playerTwo.finished !== true) {
      await sleep(playerRun, playerTwo);
    }
  } while (numOfPlayersFinished < numOfPlayers);
};

startRace();

// setTimeout(() => {console.log('1')}, 0);
// setTimeout(() => {console.log('2')}, 3000);
// console.log('3');
// console.log('4');
// console.log('5');

//noooooo