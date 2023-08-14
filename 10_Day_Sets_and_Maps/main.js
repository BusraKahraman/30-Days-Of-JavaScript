/************************     EXERCISE LEVEL 1     *************************/

//1. create an empty set

// const set = new Set();
// console.log(set);

//2. Create a set containing 0 to 10 using loop

// const numberSet = new Set();

// for (let i = 0; i <= 10; i++) {
//   numberSet.add(i);
// }

// for (const number of numberSet) {
//   console.log(number);
// }

//3. Remove an element from a set

const countries1 = ['Finland', 'Sweden', 'Norway'];

// const set = new Set(countries1);

// console.log(set.delete('Finland'));
// console.log(set);

//4. Clear a set

// const set = new Set(countries1);

// set.clear();
// console.log(set);

//5. Create a set of 5 string elements from array

// const fruits = ['banana', 'cherry', 'strawberry', 'orange', 'plum'];

// const fruitSet = new Set(fruits);
// console.log(fruitSet);

//6. Create a map of countries and number of characters of a country

// const map = new Map();

// countries1.forEach((country) => {
//   map.set(country, country.length);
// });

// console.log(map);
// console.log(map.size);

// countries2 = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo'],
// ];

// const map = new Map(countries2);
// console.log(map);
// console.log(map.size);

/************************     EXERCISE LEVEL 2     *************************/

//1. Find a union b

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
// const c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
// let C = new Set(c);

// console.log(C);

//2. Find a intersection b

// let c = a.filter((num) => B.has(num));
// let C = new Set(c);

// console.log(C);

//3. Find a with b

//same as Q2

/************************     EXERCISE LEVEL 3     *************************/

//1. How many languages are there in the countries object file.

// const languagesSet = new Set(countries);

// countries.forEach((country) => {
//   country.languages.forEach((language) => {
//     languagesSet.add(language);
//   });
// });

// console.log(languagesSet.size);

//2. *** Use the countries data to find the 10 most spoken languages:

//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]

// const mostSpokenLanguages = (countries, num) => {
//   const languageCount = {};

//   countries.forEach((country) => {
//     country.languages.forEach((language) => {
//       if (languageCount[language]) {
//         languageCount[language]++;
//       } else {
//         languageCount[language] = 1;
//       }
//     });
//   });

//   const sortedLanguages = Object.keys(languageCount).sort(
//     (a, b) => languageCount[b] - languageCount[a]
//   );

//   const topLanguages = sortedLanguages.slice(0, num);

//   const result = topLanguages.map((language) => {
//     const obj = {};
//     obj[language] = languageCount[language];
//     return obj;
//   });
//   return result;
// };

// console.log(mostSpokenLanguages(countries, 10));
// console.log(mostSpokenLanguages(countries, 3));
