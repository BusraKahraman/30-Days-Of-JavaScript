/************************     EXERCISE LEVEL 1     *************************/

//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
// for loop

// for (let i = 0; i <= 10; i++) {
//   console.log('1. for loop: ', i);
// }

//do-while loop

// let i = 0;
// do {
//   console.log('1. do-while loop: ', i);
//   i++;
// } while (i <= 10);

//2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let j = 10; j >= 0; j--) {
//   console.log('2. for loop: ', j);
// }

//do-while loop
// let j = 10;
// do {
//   console.log('2. do-while loop: ', j);
//   j--;
// } while (j >= 0);

//3. Iterate 0 to n using for loop

// for (let i = 0; i < n; i++) {
//   console.log('3. for loop: ', i);
// } //gives out a n is not defined error

//4. Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

// for (let i = 1; i <= 7; i++) {
//   let line = '';
//   for (let j = 1; j <= i; j++) {
//     line += '#';
//   }
//   console.log(line);
// }

//5. Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

//6. Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// console.log('i   i^2   i^3');
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i}    ${i * i}     ${i * i * i}`);
// }

//7. Use for loop to iterate from 0 to 100 and print only even numbers

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//8. Use for loop to iterate from 0 to 100 and print only odd numbers

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//9. Use for loop to iterate from 0 to 100 and print only prime numbers

// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(i);
//   }
// }

//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log('sum of all numbers: ', sum); //(5050)

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }

// console.log('sum of even numbers: ', sumEven, '\nsum of odd numbers: ', sumOdd); //even:2450 odd:2500

//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

// let arr = [sumEven, sumOdd];
// console.log('sum of even and odd numbers as an array: ', arr);

//13. Develop a small script which generate array of 5 random numbers

// let randomArr = [];
// let i = 0;

// do {
//   let num = Math.floor(Math.random() * 101);
//   randomArr.push(num);
//   i++;
// } while (i < 5);

// console.log(randomArr);

//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

// let randomArr = [];

// while (randomArr.length < 5) {
//   let num = Math.floor(Math.random() * 101);
//   if (!randomArr.includes(num)) {
//     randomArr.push(num);
//   }
// }
// console.log(randomArr);

//15. Develop a small script which generate a six characters random id:

// const random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let ids = '';

// for (let i = 0; i < 6; i++) {
//   const randomIndex = Math.floor(Math.random() * random.length);
//   ids += random.charAt(randomIndex);
// }

// console.log(ids);

/************************     EXERCISE LEVEL 2     *************************/

//1. Develop a small script which generate any number of characters random id:

// const random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let ids = '';
// const minLen = 6;
// const maxLen = 20;
// const len = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen;

// for (let i = 0; i < len; i++) {
//   const randomIndex = Math.floor(Math.random() * random.length);
//   ids += random.charAt(randomIndex);
// }

// console.log(ids);

//2. Write a script which generates a random hexadecimal number.

// const hexChar = '0123456789abcdef';
// let hex = '';

// for (let i = 0; i < 6; i++) {
//   const randomIndex = Math.floor(Math.random() * hexChar.length);
//   hex += hexChar.charAt(randomIndex);
// }

// console.log(`#${hex}`);

//3. Write a script which generates a random rgb color number.

// let rgb = [];
// let i = 0;

// do {
//   let num = Math.floor(Math.random() * 257);
//   rgb.push(num);
//   i++;
// } while (i < 3);

// let rgbStr = rgb.toString();

// console.log(`rgb(${rgbStr})`);

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ];

//4. Using the above countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// const uppercaseCountries = countries.map((country) => country.toUpperCase());

// console.log(uppercaseCountries);

//5. Using the above countries array, create an array for countries length'.
//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

// const countriesLen = [];
// for (let i = 0; i < countries.length; i++) {
//   countriesLen.push(countries[i].length);
// }
// console.log(countriesLen);

//6. Use the countries array to create the following array of arrays:
// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

// const newCountry = 'Iceland';
// countries.splice(countries.length - 2, 0, newCountry);
// const countriesArr = [];

// for (let i = 0; i < countries.length; i++) {
//   const country = countries[i];
//   const code = country.slice(0, 3).toUpperCase();
//   const countryLen = country.length;
//   countriesArr.push([country, code, countryLen]);
// }

// console.log(countriesArr);

//7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']

// const landArr = [];

// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].includes('land')) {
//     landArr.push(countries[i]);
//   }
// }

// if (landArr.length > 0) {
//   console.log(landArr);
// } else {
//   console.log('All these countries are without land');
// }

//8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
//['Albania', 'Bolivia','Ethiopia']

// const iaArr = [];

// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].includes('ia')) {
//     iaArr.push(countries[i]);
//   }
// }

// if (iaArr.length > 0) {
//   console.log(iaArr);
// } else {
//   console.log('These are countries ends without ia');
// }

//9. Using the above countries array, find the country containing the biggest number of characters.
//Ethiopia

// let biggestCountry = '';
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length > biggestCountry.length) {
//     biggestCountry = countries[i];
//   }
// }

// console.log(biggestCountry);

//10. Using the above countries array, find the country containing only 5 characters.
//['Japan', 'Kenya']

// let only5 = [];

// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length === 5) {
//     only5.push(countries[i]);
//   }
// }

// console.log(only5);

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ];

//11.Find the longest word in the webTechs array

// let biggestWord = '';

// for (let i = 0; i < webTechs.length; i++) {
//   if (webTechs[i].length > biggestWord.length) {
//     biggestWord = webTechs[i];
//   }
// }

// console.log(biggestWord);

//12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// const newWeb = [];
// for (let i = 0; i < webTechs.length; i++) {
//   len = webTechs[i].length;
//   newWeb.push([webTechs[i], len]);
// }

// console.log(newWeb);

// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

//13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// const first = mernStack.map((first) => first[0]);
// const mern = first.join('');
// console.log(mern);

//14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// const arr = [
//   'HTML',
//   'CSS',
//   'JS',
//   'React',
//   'Redux',
//   'Node',
//   'Express',
//   'MongoDB',
// ];

// for (tech of arr) {
//   console.log(tech);
// }

//15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// const fruit = ['banana', 'orange', 'mango', 'lemon'];
// const fruitRev = [];
// let i = 3;

// for (let i = fruit.length - 1; i >= 0; i--) {
//   fruitRev.push(fruit[i]);
// }

// console.log(fruitRev);

//16. Print all the elements of array as shown below.

// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB'],
// ];

// HTML;
// CSS;
// JS;
// REACT;
// NODE;
// EXPRESS;
// MONGODB;

// fullStack.forEach((stack) => {
//   stack.forEach((tech) => {
//     console.log(tech.toUpperCase() + ';');
//   });
// });

/************************     EXERCISE LEVEL 3     *************************/

//1. Copy countries array(Avoid mutation)

// const copy = countries.splice('');
// console.log(copy);

//2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

// const copy = [...countries];
// const sortedCountries = copy.sort();
// console.log(sortedCountries);
// console.log(countries);

//3. Sort the webTechs array and mernStack array

// const sortedWeb = webTechs.sort();
// const sortedMern = mernStack.sort();

// console.log(sortedWeb, sortedMern);

//4. Extract all the countries contain the word 'land' from the countries array and print it as array
//['Finland', 'Iceland', 'Ireland', 'Marshall Islands', 'Netherlands', 'New Zealand', 'Poland', 'Solomon Islands', 'Swaziland', 'Switzerland', 'Thailand']

// const landArr = [];
// for (const country of countries) {
//   if (country.includes('land')) {
//     landArr.push(country);
//   }
// }
// console.log(landArr);

//5. Find the country containing the hightest number of characters in the countries array
//Central African Republic

// let biggest = '';
// for (const country of countries) {
//   if (country.length > biggest.length) {
//     biggest = country;
//   }
// }
// console.log(biggest);

//6. Extract all the countries contain the word 'land' from the countries array and print it as array
//same as 4

//7. Extract all the countries containing only four characters from the countries array and print it as array
//['Chad', 'Cuba', 'Fiji', 'Iran', 'Iraq', 'Laos', 'Mali', 'Oman', 'Peru', 'Togo']

// let only4 = [];
// for (const country of countries) {
//   if (country.length === 4) {
//     only4.push(country);
//   }
// }
// console.log(only4);

//8. Extract all the countries containing two or more words from the countries array and print it as array
//['Antigua and Barbuda', 'Bosnia and Herzegovina', 'Burkina Faso', 'Cape Verde', 'Central African Republic', 'Congo (Brazzaville)', 'Costa Rica', "Cote d'Ivoire", 'Czech Republic', 'Dominican Republic', 'East Timor (Timor Timur)', 'El Salvador', 'Equatorial Guinea', 'Gambia, The', 'Korea, North', 'Korea, South', 'Marshall Islands', 'New Zealand', 'Papua New Guinea', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Serbia and Montenegro', 'Sierra Leone', 'Solomon Islands', 'South Africa', 'Sri Lanka', 'Trinidad and Tobago', 'United Arab Emirates', 'United Kingdom', 'United States', 'Vatican City']

// let twoOrMore = [];
// for (const country of countries) {
//   if (country.includes(' ')) {
//     twoOrMore.push(country);
//   }
// }
// console.log(twoOrMore);

//9. Reverse the countries array and capitalize each country and stored it as an array

// const reversedCountries = countries.reverse();
// const newCountries = [];

// for (const country of reversedCountries) {
//   const newCountry = country.toUpperCase();
//   newCountries.push(newCountry);
// }

// console.log(newCountries);
