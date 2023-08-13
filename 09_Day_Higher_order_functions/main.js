/************************     EXERCISE LEVEL 1     *************************/

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

//1. Explain the difference between forEach, map, filter, and reduce.

//forEach only iterates array elements
//map iterates and modifies array elements
//filter filters out items and returns new array
//reduce takes accumulator, current and optional initial value as a parameter and returns a single value.

//2. Define a callback function before you use it in forEach, map, filter or reduce.

// const callback = (n) => {
//   return n * 2;
// };

// numbers.forEach(callback);

// const doubleNumbers = numbers.map(callback);

// const evenNumbers = numbers.filter((el) => el % 2 === 0);

// const sum = numbers.reduce((ac, el) => {
//   return ac + el;
// }, 0);

// console.log(doubleNumbers);
// console.log(evenNumbers);
// console.log(sum);

//3. Use forEach to console.log each country in the countries array.

// countries.forEach((country) => console.log(country));

//4. Use forEach to console.log each name in the names array.

// names.forEach((name) => console.log(name));

//5. Use forEach to console.log each number in the numbers array.

// numbers.forEach((number) => console.log(number));

//6. Use map to create a new array by changing each country to uppercase in the countries array.

// const uppercaseCountries = countries.map(function (countries) {
//   return countries.toUpperCase();
// });

// console.log(uppercaseCountries);

//7. Use map to create an array of countries length from countries array.

// const lengthOfCountries = countries.map(function (countries) {
//   return countries.length;
// });

// console.log(lengthOfCountries);

//8. Use map to create a new array by changing each number to square in the numbers array

// const sqrNumbers = numbers.map(function (number) {
//   return number * number;
// });

// console.log(sqrNumbers);

//9. Use map to change to each name to uppercase in the names array

// const uppercaseNames = names.map(function (name) {
//   return name.toUpperCase();
// });

// console.log(uppercaseNames);

//10. Use map to map the products array to its corresponding prices.

// const productPrice = products.map(function (product) {
//   return product.price;
// });

// console.log(productPrice);

//11. Use filter to filter out countries containing land.

// const countriesWithLand = countries.filter((country) =>
//   country.includes('land')
// );
// console.log(countriesWithLand);

//12. Use filter to filter out countries having six character.

// const sixCharCountry = countries.filter((country) => country.length === 6);
// console.log(sixCharCountry);

//13. Use filter to filter out countries containing six letters and more in the country array.

// const moreSixCountry = countries.filter((country) => country.length > 6);
// console.log(moreSixCountry);

//14. Use filter to filter out country start with 'E';

// const countryWithE = countries.filter((country) => country.includes('E'));
// console.log(countryWithE);

//15. Use filter to filter out only prices with values.

// const onlyPrices = products.filter(
//   (product) => typeof product.price === 'number'
// );
// console.log(onlyPrices);

//16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

// const getStringLists = (arr) => {
//   return arr.filter((item) => typeof item === 'string');
// };

// const mixedArray = [1, 'apple', true, 'banana', 42, 'cherry'];
// const stringItems = getStringLists(mixedArray);
// console.log(stringItems);

//17. Use reduce to sum all the numbers in the numbers array.

// const sum = numbers.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);

//18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// countries.unshift('Estonia');
// const sentence = countries.reduce((acc, curr, index) => {
//   if (index === 0) {
//     return curr;
//   } else if (index === countries.length - 1) {
//     return acc + ', and ' + curr;
//   } else {
//     return acc + ', ' + curr;
//   }
// });

// console.log(`${sentence} are north european countries`);

//19. Explain the difference between some and every

//some checks some elements to see if they're similar and returns boolean.
//every checks all elements to see if they're similar and returns boolean.

//20. Use some to check if some names' length greater than seven in names array

// const names7 = names.some((name) => name.length > 7);
// console.log(names7);

//21. Use every to check if all the countries contain the word land

// const countriesWithLand = countries.every((country) =>
//   country.includes('land')
// );
// console.log(countriesWithLand);

//22. Explain the difference between find and findIndex.

//find returns the first element which satisfies the condition
//findIndex return its position

//23. Use find to find the first country containing only six letters in the countries array

// const firstCountry = countries.find((country) => country.length === 6);
// console.log(firstCountry);

//24. Use findIndex to find the position of the first country containing only six letters in the countries array

// const firstCountry = countries.findIndex((country) => country.length === 6);
// console.log(firstCountry);

//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

// const norwayIndex = countries.findIndex((country) => country === 'Norway');
// console.log(norwayIndex);

//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

// const russiaIndex = countries.findIndex((country) => country === 'Russia');
// console.log(russiaIndex);

/************************     EXERCISE LEVEL 2     *************************/

//1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

// const totalPrices = products
//   .map((product) => product.price)
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(totalPrices);

//2. Find the sum of price of products using only reduce reduce(callback))

// const totalPrices = products.reduce((acc, curr) => acc + curr.price, 0);
// console.log(totalPrices);

//3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

// const categorizeCountries = countries.filter((country) =>
//   country.name.includes('Island')
// );
// console.log(categorizeCountries);

//4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

// const countriesStartingWithL = countries.filter((country) =>
//   country.name.toLowerCase().includes('l')
// );
// const countCountriesStartingWithL = countriesStartingWithL.length;
// console.log(countriesStartingWithL);
// console.log(countCountriesStartingWithL);

//5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

// const getFirstTenCountries = () => {
//   const first10 = countries.slice(0, 10);

//   const countryNames = first10.map((country) => country.name);

//   return {
//     first10,
//     countryNames,
//   };
// };

// const result = getFirstTenCountries();
// console.log(result.first10);
// console.log(result.countryNames);

//6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

// const getLastTenCountries = () => {
//   const last10 = countries.slice(countries.length - 10);
//   const countryNames = last10.map((country) => country.name);

//   return {
//     last10,
//     countryNames,
//   };
// };

// const result = getLastTenCountries();
// console.log(result.last10);
// console.log(result.countryNames);

//7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

// const letters = {};

// countries.forEach((country) => {
//   const firstLetter = country.name.charAt(0).toUpperCase();
//   if (letters[firstLetter]) {
//     letters[firstLetter]++;
//   } else {
//     letters[firstLetter] = 1;
//   }
// });

// let mostUsedLetter = '';
// let highestCount = 0;

// for (const letter in letters) {
//   if (letters[letter] > highestCount) {
//     mostUsedLetter = letter;
//     highestCount = letters[letter];
//   }
// }

// console.log(
//   `most used letter is "${mostUsedLetter}" and it's been used ${highestCount} times`
// );

/************************     EXERCISE LEVEL 3     *************************/

//1. Use the countries information, in the data folder. Sort countries by name, by capital, by population

// const nameSort = countries.slice().sort((a, b) => a.name.localeCompare(b.name));
// const capitalSort = countries
//   .slice()
//   .sort((a, b) => a.capital.localeCompare(b.capital));
// const populationSort = countries
//   .slice()
//   .sort((a, b) => a.population - b.population);

// console.log(nameSort);
// console.log(capitalSort);
// console.log(populationSort);

//2. *** Find the 10 most spoken languages:
// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]

// const mostSpokenLanguages = (countries, num) => {
//   const languages = countries.flatMap((country) => country.languages);
//   const languageCount = {};

//   for (const language of languages) {
//     if (languageCount[language]) {
//       languageCount[language]++;
//     } else {
//       languageCount[language] = 1;
//     }
//   }

//   const sortedLanguages = Object.keys(languageCount).sort(
//     (a, b) => languageCount[b] - languageCount[a]
//   );
//   const topLanguages = sortedLanguages.slice(0, num);

//   const result = topLanguages.map((language) => {
//     return {
//       country: language,
//       count: languageCount[language],
//     };
//   });
//   return result;
// };

// console.log(mostSpokenLanguages(countries, 10));
// console.log(mostSpokenLanguages(countries, 3));

//3. *** Use countries_data.js file create a function which create the ten most populated countries
// console.log(mostPopulatedCountries(countries, 10))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]
//

// const mostPopulatedCountries = (countries, num) => {
//   const sortedCountries = countries.sort((a, b) => b.population - a.population);
//   const topCountries = sortedCountries.slice(0, num);

//   const result = topCountries.map((country) => {
//     return {
//       country: country.name,
//       population: country.population,
//     };
//   });

//   return result;
// };

// console.log(mostPopulatedCountries(countries, 10));
// console.log(mostPopulatedCountries(countries, 3));

//4. *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// const statistics = {
//   data: [],

//   setData: function (data) {
//     this.data = data;
//   },

//   count: function () {
//     return this.data.length;
//   },

//   sum: function () {
//     return this.data.reduce((a, c) => a + c, 0);
//   },

//   min: function () {
//     return Math.min(...this.data);
//   },
//   max: function () {
//     return Math.max(...this.data);
//   },
//   range: function () {
//     return this.max() - this.min();
//   },
//   mean: function () {
//     return this.sum() / this.count();
//   },
//   median: function () {
//     const sortedData = this.data.slice().sort((a, b) => b - a);
//     const middleIndex = Math.floor(sortedData.length / 2);

//     if (sortedData.length % 2 === 0) {
//       return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
//     } else {
//       return sortedData[middleIndex];
//     }
//   },
//   mode: function () {
//     const countMap = new Map();
//     this.data.forEach((value) => {
//       countMap.set(value, (countMap.get(value) || 0) + 1);
//     });
//     let maxCount = 0;
//     let mode = null;
//     countMap.forEach((count, value) => {
//       if (count > maxCount) {
//         maxCount = count;
//         mode = value;
//       }
//     });
//     return { mode, count: maxCount };
//   },
//   variance: function () {
//     const mean = this.mean();
//     const sqrDiff = this.data.map((value) => Math.pow(value - mean, 2));
//     return this.sum(sqrDiff) / (this.count() - 1);
//   },
//   standardDeviation: function () {
//     return Math.sqrt(this.variance());
//   },
//   freqDist: function () {
//     const freqMap = new Map();
//     this.data.forEach((value) => {
//       freqMap.set(value, (freqMap.get(value) || 0) + 1);
//     });

//     const freqDist = [];
//     freqMap.forEach((count, value) => {
//       freqDist.push([count, value]);
//     });

//     return freqDist
//       .sort((a, b) => b[0] - a[0])
//       .map((entry) => [(entry[0] / this.count()) * 100, entry[1]]);
//   },

//   describe: function () {
//     return {
//       count: this.count(),
//       sum: this.sum(),
//       min: this.min(),
//       max: this.max(),
//       range: this.range(),
//       mean: this.mean(),
//       median: this.median(),
//       mode: this.mode(),
//       variance: this.variance(),
//       standardDeviation: this.standardDeviation(),
//       freqDist: this.freqDist(),
//     };
//   },
// };

// const ages = [
//   31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
//   31, 34, 24, 33, 29, 26,
// ];

// statistics.setData(ages);
// console.log('Count:', statistics.count());
// console.log('Sum: ', statistics.sum());
// console.log('Min: ', statistics.min());
// console.log('Max: ', statistics.max());
// console.log('Range: ', statistics.range());
// console.log('Mean: ', statistics.mean());
// console.log('Median: ', statistics.median());
// console.log('Mode: ', statistics.mode());
// console.log('Variance: ', statistics.variance());
// console.log('Standard Deviation: ', statistics.standardDeviation());
// console.log('Frequency Distribution: ', statistics.freqDist());
// console.log(statistics.describe());
