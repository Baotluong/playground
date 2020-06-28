// const timeConversion = (time) => {
//   // return the 24 hr version of the time
//   const AMPM = time.slice(-2);
//   const isAm = AMPM === 'AM';
//   const array = time.slice(0, 8).split(':');
//   if (isAm) {
//     array[0] = array[0] === '12' ? '00' : array[0];
//   } else {
//     // array[0] = Number.parseInt(array[0]) % 12 + 12;
//     array[0] = array[0] === '12' ? array[0] : Number.parseInt(array[0]) + 12;
//   }
//   return array.join(':');
// }

const timeConversion = (time) => {
  //return 24 hr version of the time

  if (time.includes('PM')) {
    let newHour = parseInt(time.slice(0,2));
    if (newHour === 12) return time.slice(0,8)
    return `${newHour + 12}${time.slice(2,1)}`;
  }
  if (parseInt(time.slice(0,2)) === 12) return `00${time.slice(2,8)}`
  
  return time.slice(0,8);
}

// input HH:MM:SSAM or HH:MM:SSPM
// Example "07:15:30PM" => "19:15:30"
// 09:12:00PM => output
console.log(timeConversion("12:15:30PM"));
console.log(timeConversion("07:15:30PM"));
console.log(timeConversion("01:15:30AM"));
console.log(timeConversion("12:15:30AM"));
