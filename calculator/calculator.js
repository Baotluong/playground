// node calculator.js anyInt 'anyPrimaryOpertaion' anyInt
// '1 + 10'
// End product
// Should be able to do
// calculate('1 + 20 / 2 * 5 - 2'); // 49

// Bonus
// calculate('(1+ 20)/3 * 2 - 16)'); // -2

const parseString = (string) => {
  const cleanString = string.replace(/ /g, '');
  let resultArr = [0]
  for (char of cleanString) {
    if (!isNaN(char)) {
      resultArr[resultArr.length - 1] =
        resultArr[resultArr.length - 1] ?
        resultArr[resultArr.length - 1] + char :
        char
    } else {
      resultArr[resultArr.length - 1] = Number.parseInt(resultArr[resultArr.length - 1])
      resultArr.push(char)
      resultArr.push(0)
    }
  }
  resultArr[resultArr.length - 1] = Number.parseInt(resultArr[resultArr.length - 1])
  return resultArr;
}

const doTheMath = ({ x, y, operation }) => {
  let result;
  if (operation === '+') {
    result = x + y;
  } else if (operation === '-') {
    result = x - y;
  } else if (operation === '*') {
    result = x * y;
  } else if (operation === '/') {
    result = y === 0 ? 'cannot divide by 0' : x / y;
  }
  return result;
}

const calculate = (string) => {
  const parseArray = parseString(string)
  const response = doTheMath({
    x: parseArray[0],
    y: parseArray[2],
    operation: parseArray[1],
  })
  console.log(`The answer is ${response}`);
}

calculate('2    /   0  ')
//  console.log(doTheMath({
//    x: 1,
//    y: 3,
//    operation: '/'
//  }));

