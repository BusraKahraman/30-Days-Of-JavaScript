/************************     EXERCISE LEVEL 1     *************************/

//Declare firstName, lastName, country, city, age, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Büşra';
let lastName = 'Kahraman';
let country = 'Turkey';
let city = 'Ankara';
let age = 27;
let year = 2023;

console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof year
);

//Check if type of '10' is equal to 10
console.log('10' === 10);

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);

//Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

console.log('truthies: ', 'string', 15, true);
console.log('falsies: ', 0, 0n, false);

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 true
// 4 >= 3 true
// 4 < 3 false
// 4 <= 3 false
// 4 == 4 true
// 4 === 4 true
// 4 != 4 false
// 4 !== 4 false
// 4 != '4' true x
// 4 == '4' false x
// 4 === '4' false

console.log(
  '1:',
  4 > 3,
  '\n2:',
  4 >= 3,
  '\n3:',
  4 < 3,
  '\n4:',
  4 <= 3,
  '\n5:',
  4 == 4,
  '\n6:',
  4 === 4,
  '\n7:',
  4 != 4,
  '\n8:',
  4 !== 4,
  '\n9:',
  4 != '4',
  '\n10:',
  4 == '4',
  '\n11:',
  4 === '4'
);

// Find the length of python and jargon and make a falsy comparison statement.
let py = 'python';
let ja = 'jargon';

console.log(py.length !== ja.length);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 - true && true => true
// 4 > 3 && 10 > 12 - true && false => false
// 4 > 3 || 10 < 12 - true || true => true
// 4 > 3 || 10 > 12 - true || false => true
// !(4 > 3) - !(true) => false
// !(4 < 3) - !(false) => true
// !(false) - true
// !(4 > 3 && 10 < 12) - !(true && true) => !(true) => false
// !(4 > 3 && 10 > 12) - !(true && false) => !(false) => true
// !(4 === '4') - !(false) => true
console.log(
  '1:',
  4 > 3 && 10 < 12,
  '\n2:',
  4 > 3 && 10 > 12,
  '\n3:',
  4 > 3 || 10 < 12,
  '\n4:',
  4 > 3 || 10 > 12,
  '\n5:',
  !(4 > 3),
  '\n6:',
  !(4 < 3),
  '\n7:',
  !false,
  '\n8:',
  !(4 > 3 && 10 < 12),
  '\n9:',
  !(4 > 3 && 10 > 12),
  '\n10:',
  !(4 === '4')
);

// There is no 'on' in both dragon and python - false

console.log('dragon'.includes('on') && 'python'.includes('on') ? true : false);

// Use the Date object to do the following activities
// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.

let now = new Date();
console.log(`Year is: ${now.getFullYear()}`);
console.log(`Month is: ${now.getMonth()}`);
console.log(`Date is: ${now.getDate()}`);
console.log(`Day is: ${now.getDay()}`);
console.log(`Hour is: ${now.getHours()}`);
console.log(`Minute is: ${now.getMinutes()}`);
console.log(`Seconds elapsed from January 1, 1970: ${now.getTime()}`);

/************************     EXERCISE LEVEL 2    *************************/

//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let base = prompt('enter base: ');
// let height = prompt('enter height: ');
// let area = 0.5 * base * height;
// alert(`The area of the triangle is ${area}`);

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// let a = prompt('enter side a: ');
// let b = prompt('enter side b: ');
// let c = prompt('enter side c: ');
// let perimeter = Number(a) + Number(b) + Number(c);
// alert(`The perimeter of the triangle is ${perimeter}`);

//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length = prompt('enter length: ');
// let width = prompt('enter width: ');
// let area = length * width;
// let perimeter = 2 * (Number(length) + Number(width));
// alert(`The area of the rectangle is ${area} and the perimeter is ${perimeter}`);

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let pi = 3.14;
// let r = prompt('Enter r: ');
// let area = pi * r * r;
// let circumference = 2 * pi * r;
// alert(`Area of a circle is ${area} and circumference is ${circumference}`);

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// y = mx + b
//slope is m
let slope = 2;
//y-intercept is the point where the line crosses the y-axis. in this equation it's -2
let yIntercept = -2;
//to find x-intercept set y to 0 => 0 = 2x - 2 => x=1
let xIntercept = 1;
//display the values
console.log(
  `Slope = ${slope}, y-intercept = ${yIntercept}, x-intercept = ${xIntercept}`
);

//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let m = (y2 - y1) / (x2 - x1);
console.log(`Slope between point (2,2) and point (6,10) is ${m}`);

//7. Compare the slope of above two questions.

console.log(slope === m);

//8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

//coefficients of the equation
let a = 1; // x^2
let b = 6; // x
let c = 9; // constant

//calculate the discriminant
let discriminant = b * b - 4 * a * c;

if (discriminant >= 0) {
  let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log(`When y is 0 x is: ${x1} and ${x2}`);
} else {
  console.log('No real values of x when y is 0');
}

//9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// let hours = parseFloat(prompt('Enter hours: '));
// let ratePerHour = parseFloat(prompt('Enter rate per hour: '));
// let pay = hours * ratePerHour;
// console.log(`Your pay is: ${pay}`);

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.

// let promptName = prompt('Enter your name: ');
// let nameLength = promptName.length;

// nameLength > 7
//   ? console.log('Your name is long')
//   : console.log('Your name is short');

//11. Compare your first name length and your family name length and you should get this output.
let firstName1 = 'Büşra';
let lastName1 = 'Kahraman';

firstName1.length > lastName1.length
  ? console.log(
      `Your first name, ${firstName1} is longer than your family name, ${lastName1}`
    )
  : console.log(
      `Your first name, ${firstName1} is not longer than your family name, ${lastName1}`
    );

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250;
let yourAge = 25;

console.log(`I am ${myAge - yourAge} years older than you`);

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// let born = parseFloat(prompt('Year you were born: '));
// let curYear = new Date();
// let age1 = curYear.getFullYear() - born;

// age1 > 18
//   ? console.log(`You are ${age1}. You are old enough to drive.`)
//   : console.log(
//       `You are ${
//         curYear.getFullYear() - born
//       }. You will be allowed to drive after ${18 - age1} years.`
//     );

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// let numYear = parseFloat(prompt('Enter number of years: '));
// let secInYear = 365 * 24 * 60 * 60;
// let alive = numYear * secInYear;
// console.log(`You lived ${alive} seconds.`);

//15. Create a human readable time format using the Date time object
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

let time = new Date();
let year15 = time.getFullYear();
let month = time.getMonth();
let day = time.getDay();
let hour = time.getHours();
let minute = time.getMinutes();
let monthStr = monthNames[month];
let dayStr = dayNames[day];

// YYYY-MM-DD HH:mm
console.log(
  `YYYY-MM-DD HH:mm => ${year15}-${monthStr}-${dayStr} ${hour}:${minute} `
);
// DD-MM-YYYY HH:mm
console.log(
  `DD-MM-YYYY HH:mm => ${dayStr}-${monthStr}-${year15} ${hour}:${minute} `
);
// DD/MM/YYYY HH:mm
console.log(
  `DD/MM/YYYY HH:mm => ${dayStr}/${monthStr}/${year15} ${hour}:${minute} `
);

/************************     EXERCISE LEVEL 3     *************************/

//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const time0 = (date) => {
  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let year = String(date.getFullYear());
  let month = String(date.getMonth()).padStart(2, '0');
  let day = String(date.getDay()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const nowLevel3 = new Date();
const format = time0(nowLevel3);

console.log(format);
