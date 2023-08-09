/************************     EXERCISE LEVEL 1     *************************/

//1. Declare an empty array;
const emptyArr = [];

//2. Declare an array with more than 5 number of elements
const fiveArr = [1, 2, 3, 4, 5, 6, 7];

//3. Find the length of your array
console.log(fiveArr.length);

//4. Get the first item, the middle item and the last item of the array
let firstItem = fiveArr[0];
let middleItem = fiveArr[3];
let lastItem = fiveArr[6];
console.log(
  'first item: ',
  firstItem,
  '\nmiddle item: ',
  middleItem,
  '\nlast item: ',
  lastItem
);

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['hi', 'mixed', 'data', 1, 2, 3];
console.log(mixedDataTypes.length);

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

//7. Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
console.log(itCompanies.length);

//9. Print the first company, middle and last company
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[3];
let lastCompany = itCompanies[6];
console.log(
  'first company: ',
  firstCompany,
  '\nmiddle company: ',
  middleCompany,
  '\nlast company: ',
  lastCompany
);

//10. Print out each company
itCompanies.forEach((company) => {
  console.log(company);
});

//11. Change each company name to uppercase one by one and print them out
itCompanies.forEach((company) => {
  console.log(company.toUpperCase());
});

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// itCompanies.splice(6, 0, 'and');
// console.log(`${itCompanies.join(', ')} are big IT companies`);

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf('Amazon');
index === -1
  ? console.log("This company doesn't exist.")
  : console.log('This company exist.');

//14. Filter out companies which have more than one 'o' without the filter method
const newCompanies = [];

for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i];
  let count = 0;

  for (let j = 0; j < company.length; j++) {
    if (company[j].toLowerCase() === 'o') {
      count++;
    }
  }
  if (count === 1) {
    newCompanies.push(company);
  }
}

console.log(newCompanies);

//15. Sort the array using sort() method
console.log(itCompanies.sort());

//16. Reverse the array using reverse() method
console.log(itCompanies.reverse());

//17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

//18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, 7));

//19. Slice out the middle IT company or companies from the array
const middle = () => {
  return Math.ceil(itCompanies.length / 2) - 1;
};
console.log(itCompanies.slice(middle(), middle() + 1));

//20. Remove the first IT company from the array
console.log(itCompanies.shift());

//21. Remove the middle IT company or companies from the array
console.log(itCompanies.splice(middle(), 1));

//22. Remove the last IT company from the array
console.log(itCompanies.pop());

//23. Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

/************************     EXERCISE LEVEL 2     *************************/

//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let removePunc = text.replace(/[^\w\s]/g, '');
let words = removePunc.split(' ');
console.log(words);
console.log(words.length);

//3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
const allergicToHoney = false;
if (allergicToHoney === true) {
  const itemToRemove = 'Honey';
  const newCart = shoppingCart.filter((item) => item !== itemToRemove);
  console.log(newCart);
} else {
  console.log(shoppingCart);
}

// modify Tea to 'Green Tea'
const modifyTea = shoppingCart.indexOf('Tea');
const newTea = 'Green Tea';
if (modifyTea !== -1) {
  shoppingCart[modifyTea] = newTea;
}

console.log(shoppingCart);

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const checkCountry = countries.indexOf('Ethiopia');
if (checkCountry !== -1) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
  console.log(countries);
}

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const checkWebTech = webTechs.indexOf('Sass');
if (checkWebTech !== -1) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

//6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

/************************     EXERCISE LEVEL 3     *************************/

//1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
let sortedAges = ages.sort();
console.log(sortedAges);
let minAge = sortedAges[0];
let maxAge = sortedAges[sortedAges.length - 1];
console.log('min age: ', minAge, '\nmax age: ', maxAge);

// Find the median age(one middle item or two middle items divided by two)
let middleAges = Math.floor(sortedAges.length / 2);
let medianAge = middleAges / 2;
console.log('median age: ', medianAge);
// Find the average age(all items divided by number of items)
const sumOfAges = () => {
  let sum = 0;
  for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
  }
  return sum;
};

let avgAge = sumOfAges() / ages.length;

console.log('average age: ', avgAge);
// Find the range of the ages(max minus min)
let ageRange = maxAge - minAge;
console.log('age range: ', ageRange);

// Compare the value of (min - average) and (max - average), use abs() method
let minAvg = Math.abs(minAge - avgAge);
let maxAvg = Math.abs(maxAge - avgAge);
console.log('(min-avg): ', minAvg, '\n(max-avg)', maxAvg);
minAvg < maxAvg
  ? console.log('minAvg is smaller than maxAvg.')
  : console.log('minAvg is bigger than maxAvg.');

//2. Slice the first ten countries from the countries array
const firstTen = countries.slice(0, 10);
console.log(firstTen);

//3. Find the middle country(ies) in the countries array
let midCountry = Math.floor(countries.length / 2);
const countryStr = countries[midCountry];
console.log('middle country: ', countryStr);

//4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let length = countries.length;
if (length % 2 === 0) {
  let firstHalf = countries.slice(0, length / 2);
  let secondHalf = countries.slice(length / 2, length - 1);
  console.log('fist half: ', firstHalf, '\nsecond half: ', secondHalf);
} else {
  let firstHalf = countries.slice(0, length / 2 + 1);
  let secondHalf = countries.slice(length / 2, length - 1);
  console.log('fist half: ', firstHalf, '\nsecond half: ', secondHalf);
}
