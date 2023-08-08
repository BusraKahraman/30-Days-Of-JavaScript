/************************     EXERCISE LEVEL 1     *************************/
//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let age = parseFloat(prompt('Enter your age: '));

// age > 18
//   ? console.log(`You are old enough to drive.`)
//   : console.log(
//       `You are ${age}. You will be allowed to drive after ${18 - age} years.`
//     );

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let myAge = 27;
// let yourAge = parseFloat(prompt('Enter your age: '));
// let diff = Math.abs(myAge - yourAge);

// myAge > yourAge
//   ? console.log(`I am ${diff} years older than you.`)
//   : console.log(`I am ${diff} years younger than you.`);

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// let a = parseFloat(prompt('a: '));
// let b = parseFloat(prompt('b: '));

// using if else
// if (a > b) {
//   console.log(`a is greater than b`);
// } else {
//   console.log(`a is less than b`);
// }

//ternary operator.

// a > b ? console.log(`a is greater than b`) : console.log(`a is less than b`);

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let a = parseFloat(prompt('Enter a number: '));

// a % 2 == 0
//   ? console.log(`${a} is an even number`)
//   : console.log(`${a} is an odd number`);

/************************     EXERCISE LEVEL 2    *************************/

//1. Write a code which can give grades to students according to theirs scores:
// let score = parseFloat(prompt('Enter the score: '));

// if (score >= 80 && score <= 100) {
//   console.log('A');
// } else if (score >= 70 && score < 80) {
//   console.log('B');
// } else if (score >= 60 && score < 70) {
//   console.log('C');
// } else if (score >= 50 && score < 60) {
//   console.log('D');
// } else if (score >= 0 && score < 50) {
//   console.log('F');
// } else {
//   console.log('Invalid score');
// }

//2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let month = prompt('Enter a month: ').toLowerCase();

// switch (month) {
//   case 'september':
//   case 'october':
//   case 'november':
//     console.log('The season is Autumn');
//     break;
//   case 'december':
//   case 'january':
//   case 'february':
//     console.log('The season is Winter');
//     break;
//   case 'march':
//   case 'april':
//   case 'may':
//     console.log('The season is Spring');
//     break;
//   case 'june':
//   case 'july':
//   case 'august':
//     console.log('The season is Summer');
//     break;
//   default:
//     console.log('not a month');
// }

//3. Check if a day is weekend day or a working day. Your script will take day as an input.
// let day = prompt('Enter a day: ').toLowerCase();

// day === 'saturday' || day === 'sunday'
//   ? console.log(`${day} is a weekend.`)
//   : console.log(`${day} is a working day.`);

/************************     EXERCISE LEVEL 3     *************************/
//1. Write a program which tells the number of days in a month.

// let month = prompt('Enter a month: ').toLowerCase();

// let daysInMonth;

// switch (month) {
//   case 'january':
//   case 'march':
//   case 'may':
//   case 'july':
//   case 'august':
//   case 'october':
//   case 'december':
//     daysInMonth = 31;
//     break;
//   case 'april':
//   case 'june':
//   case 'september':
//   case 'november':
//     daysInMonth = 30;
//     break;
//   case 'february':
//     daysInMonth = '28 or 29';
//     break;
//   default:
//     daysInMonth = 'Invalid month';
// }

// console.log(`Number of days in ${month}: ${daysInMonth}`);
