const numOfPlayers = 10;
let numOfPlayersFinished = 0;
const fieldLength = 100;
const playerList = [];

const playerGen = (draftOrder, yardLine, playerNumber) => {
  return {
    draftOrder,
    yardLine,
    playerNumber,
  }
};

for (let i = 0; i < numOfPlayers; i++) {
  playerList[i] = playerGen(0, 0, (i + 1));
};

console.log(playerList);

const randomRun = () => { return Math.floor(Math.random() * 10) + 1; };

const timeDelay = () => { return (Math.random() * 3000) + 1000; };

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function sleep(fn, ...args) {
  await timeout(timeDelay());
  return fn(...args);
};

const playerRun = async (player) => {
  player.yardLine += randomRun();
  console.log(`Player ${player.playerNumber} is at the ${player.yardLine} yard line.`);
  if (player.yardLine < fieldLength) {
    await sleep(playerRun, player);
    // Because you are doing recursion you don't actually need to await these async actions anymore.
    // We can go back to setTimeout()
    setTimeout(() => playerRun(player), timeDelay());
  } else {
    numOfPlayersFinished++;
    player.draftOrder = numOfPlayersFinished;
    console.log(`Player ${player.playerNumber} finished in spot ${numOfPlayersFinished}`);
  }
};

/*  
  This isn't functionally wrong. It depends on how you intend the game to work.
  But does it make sense for every player to immeditately run or should the players
  first wait then run.
  In order words, which makes more sense:
  Wait Run Wait Run Wait Run Wait Run Wait Run
  Or
  Run Wait Run Wait Run Wait Run Wait Run Wait Run
  
  Either way, you decide it is a nice challenge to see if you can make every player
  wait then run off the start line.
*/
for (let j = 0; j < numOfPlayers; j++) {
  playerRun(playerList[j]);
};
