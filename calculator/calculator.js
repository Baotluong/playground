// node calculator.js anyInt 'anyPrimaryOpertaion' anyInt
// '1 + 10'
// End product
// Should be able to do
// calculate('1 + 20 / 2 * 5 - 2'); // 49

// Bonus
// calculate('(1+ 20)/3 * 2 - 16'); // -2
// TODO: handle decimals

const operations = new Map();
operations.set('+')
operations.set('-')
operations.set('*')
operations.set('/')
operations.set('(')
operations.set(')')

const parseString = (string) => {
  const cleanString = string.replace(/ /g, '');
  const firstArr = []
  let start = 0;
  let end = 1;
  
  while (end <= cleanString.length) {
    if (!isNaN(cleanString[start])) {
      while (!isNaN(cleanString[end])) {
        end++;
      }
      firstArr.push(Number.parseInt(cleanString.substring(start, end)));
      start = end++;
    } else if (operations.has(cleanString[start])) {
      firstArr.push(cleanString[start])
      start++, end++;
    } else {
      throw new Error('Input contains invalid characters.')
    }
  }

  let pos = 0;
  while (pos < firstArr.length) {
    const currentValue = firstArr[pos];
    if (
      currentValue === '-' &&
      (pos === 0 || operations.has(firstArr[pos - 1])) &&
      !isNaN(firstArr[pos + 1])
    ) {
      firstArr.splice(pos, 2, -firstArr[pos + 1])
    }
    pos++;
  }
  
  return firstArr;
}

const calcSingleExpression = ({ x, y, operation }) => {
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

const calcWholeExpression = (parsedArray) => {
  while (true) {
    const firstMD = parsedArray.findIndex(ele => ele === '*' || ele === '/');
    if (firstMD < 0) break;
    const calc = calcSingleExpression({
      x: parsedArray[firstMD - 1],
      y: parsedArray[firstMD + 1],
      operation: parsedArray[firstMD],
    })
    parsedArray.splice(firstMD - 1, 3, calc);
  }

  while (parsedArray.length !== 1) {
    const firstAS = parsedArray.findIndex(ele => ele === '+' || ele === '-');
    if (firstAS < 0) break;
    parsedArray.splice(firstAS - 1, 3, calcSingleExpression({
      x: parsedArray[firstAS - 1],
      y: parsedArray[firstAS + 1],
      operation: parsedArray[firstAS],
    }));
  }
  return parsedArray[0]
}

const processParens = (array) => {
  while (true) {
    let open = array.lastIndexOf('(');
    if (open < 0) break;
    let close = null;
    if (open >= 0) {
      for (let i = open + 1; i < array.length; i++) {
        if (array[i] === ')') {
          close = i;
          break;
        }
      }
    }
    if (close === null) throw new Error('Input contains extra (')
    console.log(array.join(' '))
    array.splice(open, close - open + 1, calcWholeExpression(array.slice(open + 1, close)))
  }
  if (array.lastIndexOf(')') > 0) throw new Error('Input contains extra )')
  console.log(array.join(' '))
  return calcWholeExpression(array);
} 

const calculate = (input) => {
  console.log('==========================================');
  console.log();
  console.log(`Problem: ${input}`);
  try {
    const parsedArray = parseString(input)
    const answer = processParens(parsedArray)

    console.log(`Result: ${answer}`)
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
  console.log();
}

calculate('((-2 + 10) + 20 * -2 -2) / -2 + 30 + (-14--11)');
calculate('((-2 + 10)) + 20 * -2 -2) / -2 + 30');
calculate('(1+ 20)/3 * 2 - 16');
calculate('(1+ 20/3 * 2 - 16');
calculate('1 + 20 / 2 * 5 - 2');
calculate('1 + 20 / 2 *p 5 - 2');
