// For NumOfLevels, start with NumOfLevels = 3
//
// Log a step pyramid for that many levels
//   X X
//  XX XX
// XXX XXX

const printSteps = (levels) => {
  for (horizontal = 1; horizontal <= levels; horizontal++) {
    let currentLevel = '';
    for (vertical = 1; vertical <= levels; vertical++) {
      var newAddition = vertical <= levels - horizontal ? ' ' : '🍚';
      currentLevel += newAddition;
    }
    currentLevel += ' ';
    for (vertical = 1; vertical <= levels; vertical++) {
      var newAddition = vertical <= horizontal ? '🍚' : ' ';
      currentLevel += newAddition;
    }
    console.log(currentLevel)
  }
}

printSteps(process.argv[2]);
