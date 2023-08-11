/************************     EXERCISE LEVEL 1     *************************/

//1. Declare a function fullName and it print out your full name.

// const fullName = () => {
//   let fullName = 'Büşra Kahraman';
//   return fullName;
// };

// console.log(fullName());

//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// const fullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };

// console.log(fullName('Büşra', 'Kahraman'));

//3. Declare a function addNumbers and it takes two two parameters and it returns sum.

// const addNumbers = (num1, num2) => {
//   let sum = num1 + num2;
//   return sum;
// };

// console.log(addNumbers(5, 10));

//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// const areaOfRectangle = (length, width) => {
//   let area = length * width;
//   return area;
// };

// console.log(areaOfRectangle(7, 20));

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

// const perimeterOfRectangle = (length, width) => {
//   let perimeter = 2 * (length + width);
//   return perimeter;
// };
// console.log(perimeterOfRectangle(20, 10));

//6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

// const volumeOfRectPrism = (length, width, height) => {
//   let volume = length * width * height;
//   return volume;
// };

// console.log(volumeOfRectPrism(10, 20, 2));

//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

// const areaOfCircle = (r) => {
//   let pi = Math.PI;
//   let area = pi * r * r;
//   return area;
// };
// console.log(areaOfCircle(5));

//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

// const circumOfCircle = (r) => {
//   let pi = Math.PI;
//   let circum = 2 * pi * r;
//   return circum;
// };

// console.log(circumOfCircle(2));

//9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

// const density = (mass, volume) => {
//   let density = mass / volume;
//   return density;
// };

// console.log(density(2, 5));

//10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// const speed = (distance, time) => {
//   let speed = distance / time;
//   return speed;
// };

// console.log(speed(100, 5));

//11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

// const weight = (mass, gravity) => {
//   let weight = mass * gravity;
//   return weight;
// };

// console.log(weight(5, 10));

//12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// const convertCelsiusToFahrenheit = (c) => {
//   let f = (c * 9) / 5 + 32;
//   return f;
// };
// console.log(convertCelsiusToFahrenheit(5));

//13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

// const BMI = (weight, height) => {
//   let bmi = weight / (height * height);

//   if (bmi < 18.5) {
//     return 'underweight';
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     return 'normal weight';
//   } else if (bmi >= 25 && bmi < 29.9) {
//     return 'overweight';
//   } else if (bmi >= 30) {
//     return 'obese';
//   } else {
//     return 'wrong params';
//   }
// };

// console.log(BMI(60, 175));

//14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// const checkSeason = (month) => {
//   switch (month) {
//     case 'december':
//     case 'january':
//     case 'february':
//       return 'winter';
//     case 'march':
//     case 'april':
//     case 'may':
//       return 'spring';
//     case 'june':
//     case 'july':
//     case 'august':
//       return 'summer';
//     case 'september':
//     case 'october':
//     case 'november':
//       return 'fall';
//     default:
//       return 'wrong month';
//   }
// };

// console.log(checkSeason('march'));

//15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

// const findMax = (arg1, arg2, arg3) => {
//   let max = arg1;
//   if (arg2 > max) {
//     max = arg2;
//   }

//   if (arg3 > max) {
//     max = arg3;
//   }
//   return max;
// };

// console.log(findMax(0, 10, 5));

/************************     EXERCISE LEVEL 2     *************************/

//1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// const solveLinEquation = (a, b, c, x) => {
//   return -(a * x + c) / b;
// };

// console.log(solveLinEquation(2, 3, 5, 4));

//2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

//x = (-b ± √(b^2 - 4ac)) / (2a)

// const solveQuadEquation = (a, b, c) => {
//   const dis = b * b - 4 * a * c;
//   if (dis < 0) {
//     return 'no real roots';
//   } else if (dis === 0) {
//     const x = -b / (2 * a);
//     return x;
//   } else {
//     const x1 = ((-b + Math.sqrt(dis)) / 2) * a;
//     const x2 = ((-b - Math.sqrt(dis)) / 2) * a;
//     return `{${x1}, ${x2}}`;
//   }
// };

// console.log(solveQuadEquation(1, -1, -2));

//3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// const printArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// printArray(numbers);

//4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08

// const showDateTime = () => {
//   const time = new Date();
//   let month = time.getMonth() + 1;
//   let day = time.getDate();
//   let year = time.getFullYear();
//   let hour = time.getHours();
//   let minute = time.getMinutes();

//   month = month < 10 ? `0${month}` : month;
//   day = day < 10 ? `0${day}` : day;
//   hour = hour < 10 ? `0${hour}` : hour;
//   minute = minute < 10 ? `0${minute}` : minute;

//   let fullTime = `${day}/${month}/${year} ${hour}:${minute}`;
//   return fullTime;
// };

// console.log(showDateTime());

//5. Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

// const swapValues = (x, y) => {
//   let temp = x;
//   x = y;
//   y = temp;
//   return `x=${x}, y=${y}`;
// };

// console.log(swapValues(3, 4));

//6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// [5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// ['C', 'B', 'A']

// const reverseArray = (arr) => {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// };

// console.log(reverseArray([1, 2, 3, 4, 5]));

//7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// const capitalizeArray = (arr) => {
//   let capitalizedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     let capitalize = arr[i].toUpperCase();
//     capitalizedArray.push(capitalize);
//   }

//   return capitalizedArray;
// };

// console.log(capitalizeArray(['albania', 'bolivia', 'finland']));

//8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// const addItem = (item) => {
//   let itemArr = [];

//   itemArr.push(item);
//   return itemArr;
// };

// console.log(addItem('apple'));

//9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// const removeItem = (index, arr) => {
//   if (index >= 0 && index < arr.length) {
//     arr.splice(index, 1);
//   }
//   return arr;
// };

// const fruits = ['apple', 'peach', 'banana'];

// removeItem(2, fruits);
// console.log(fruits);

//10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// const sumOfNumbers = (num) => {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(sumOfNumbers(4));

//11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// const sumOfOdds = (num) => {
//   let sum = 0;
//   for (let i = 1; i <= num; i += 2) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(sumOfOdds(4));

//12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// const sumOfEven = (num) => {
//   let sum = 0;
//   for (let i = 2; i <= num; i += 2) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(sumOfEven(4));

//13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// const evensAndOdds = (int) => {
//   let even = 0;
//   let odd = 0;
//   for (let i = 0; i <= int; i++) {
//     if (i % 2 === 0) {
//       even++;
//     } else {
//       odd++;
//     }
//   }
//   return `The number of odds are ${odd}. The number of evens are ${even}.`;
// };

// console.log(evensAndOdds(100));

//14. Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

// const sumOfArgs = (...args) => {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// };

// console.log(sumOfArgs(1, 2, 3, 4));

//15. Write a function which generates a randomUserIp.

// const randomUserIp = () => {
//   first = Math.floor(Math.random() * 256);
//   second = Math.floor(Math.random() * 256);
//   third = Math.floor(Math.random() * 256);
//   fourth = Math.floor(Math.random() * 256);

//   return `${first}.${second}.${third}.${fourth}`;
// };

// console.log(randomUserIp());

//16. Write a function which generates a randomMacAddress

// const randomMacAddress = () => {
//   const random = '0123456789ABCDEF';
//   let mac = '';
//   for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 2; j++) {
//       mac += random[Math.floor(Math.random() * random.length)];
//     }
//     if (i < 5) {
//       mac += ':';
//     }
//   }
//   return mac;
// };
// console.log(randomMacAddress());

//17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'

// const randomHexaNumberGenerator = () => {
//     const random = '0123456789ABCDEF';
//   let hex = '';
//   for (let i = 0; i < 6; i++) {
//     hex += random[Math.floor(Math.random() * random.length)];
//   }
//   return `#${hex}`;
// };
// console.log(randomHexaNumberGenerator());

//18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE

// const userIdGenerator = () => {
//   const random =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let id = '';
//   for (let i = 0; i < 7; i++) {
//     const randomIndex = Math.floor(Math.random() * random.length);
//     id += random[randomIndex];
//   }
//   return id;
// };
// console.log(userIdGenerator());

/************************     EXERCISE LEVEL 3     *************************/

//1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '

// const userIdGeneratedByUser = () => {
//   param1 = parseInt(prompt('Enter a parameter: '));
//   param2 = parseInt(prompt('Enter a parameter: '));

//   const random =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = [];

//   for (let i = 0; i < param2; i++) {
//     let id = '';
//     for (let j = 0; j < param1; j++) {
//       const randomIndex = Math.floor(Math.random() * random.length);
//       id += random[randomIndex];
//     }
//     result.push(id);
//   }
//   return result;
// };

// console.log(userIdGeneratedByUser());

//2. Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)

// const rgbColorGenerator = () => {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   return `rgb(${red},${green},${blue})`;
// };
// console.log(rgbColorGenerator());

//3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// const arrayOfHexaColors = (count) => {
//   const hex = '0123456789ABCDEF';
//   const colors = [];

//   for (let i = 0; i < count; i++) {
//     let hexColor = '#';
//     for (let j = 0; j < count; j++) {
//       hexColor += hex[Math.floor(Math.random() * hex.length)];
//     }
//     colors.push(hexColor);
//   }

//   return colors;
// };

// console.log(arrayOfHexaColors(10));

//4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

// const arrayOfRgbColors = (count) => {
//   const colors = [];

//   for (let i = 0; i < count; i++) {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     let rgb = `rgb(${red},${green},${blue})`;
//     colors.push(rgb);
//   }
//   return colors;
// };

// console.log(arrayOfRgbColors(5));

//5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// const convertHexaToRgb = (hex) => {
//   hex = hex.replace('#', '');
//   let red = parseInt(hex.substr(0, 2), 16);
//   let green = parseInt(hex.substr(2, 2), 16);
//   let blue = parseInt(hex.substr(4, 2), 16);

//   return `rgb(${red}, ${green}, ${blue})`;
// };

// console.log(convertHexaToRgb('#ee67fa'));

//6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// const convertRgbToHexa = (rgb) => {
//   const rgbPattern = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
//   const match = rgb.match(rgbPattern);

//   if (match) {
//     let redHex = parseInt(match[1]).toString(16).padStart(2, '0');
//     let greenHex = parseInt(match[2]).toString(16).padStart(2, '0');
//     let blueHex = parseInt(match[3]).toString(16).padStart(2, '0');

//     return `#${redHex}${greenHex}${blueHex}`;
//   } else {
//     return 'Invalid RGB color format';
//   }
// };

// console.log(convertRgbToHexa('rgb(81, 31, 191)'));

//7. Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// const generateColors = (rgb, hex, count) => {
//   const colors = [];
//   if (rgb) {
//     for (let i = 0; i < count; i++) {
//       let red = Math.floor(Math.random() * 256);
//       let green = Math.floor(Math.random() * 256);
//       let blue = Math.floor(Math.random() * 256);
//       colors.push(`rgb(${red},${green},${blue})`);
//     }
//   }

//   if (hex) {
//     const hex = '0123456789ABCDEF';

//     for (let i = 0; i < count; i++) {
//       let hexColor = '#';
//       for (let j = 0; j < 6; j++) {
//         hexColor += hex[Math.floor(Math.random() * hex.length)];
//       }
//       colors.push(hexColor);
//     }
//   }
//   return colors;
// };

// console.log(generateColors(true, false, 5));

//8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// const shuffleArray = (arr) => {
//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
// };

// const fruits = ['apple', 'peach', 'banana', 'cherry'];
// shuffleArray(fruits);
// console.log(fruits);

//9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// const factorial = (num) => {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//       fact *= i;
//     }
//     return fact;
//   }
// };

// console.log(factorial(4));

//10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// const isEmpty = (param) => {
//   return param.length === 0;
// };

// console.log(isEmpty(''));

//11. Call your function sum, it takes any number of arguments and it returns the sum.

// const sum = (...args) => {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// };

// console.log(sum(1, 2, 3, 4));

//12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// const sumOfArrayItems = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') {
//       return 'not all numbers';
//     }
//     sum += arr[i];
//   }
//   return sum;
// };

// console.log(sumOfArrayItems([1, 2, 3, 4]));

//13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// const average = (arr) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') {
//       return 'not all numbers';
//     }
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(average([1, 2, 3, 4]));

//14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'

// const modifyArray = (arr) => {
//   if (arr.length < 5) {
//     return 'item not found';
//   } else {
//     arr[4] = arr[4].toUpperCase();
//     return arr;
//   }
// };

// console.log(
//   modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'])
// );

//15. Write a function called isPrime, which checks if a number is prime number.

// const isPrime = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   if (num === 2) {
//     return true;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isPrime(5));

//16. Write a functions which checks if all items are unique in the array.

// const uniqueArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     const seen = new Set();

//     for (const item of arr) {
//       if (seen.has(item)) {
//         return false;
//       }
//       seen.add(item);
//     }
//   }
//   return true;
// };

// console.log(uniqueArray([1, 2, 3, 4, 4]));

//17. Write a function which checks if all the items of the array are the same data type.

// const sameTypeArray = (arr) => {
//   if (arr.length === 0) {
//     return true;
//   }
//   let dataType = typeof arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (typeof arr[i] !== dataType) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(sameTypeArray([1, 2, 3, 4]));

//18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// const isValidVariable = (varName) => {
//   const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

//   return regex.test(varName);
// };

// console.log(isValidVariable('1Var'));

//19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

// const sevenRandomNumbers = () => {
//   const randomArr = [];

//   while (randomArr.length < 7) {
//     let randomNum = Math.floor(Math.random() * 10);
//     if (!randomArr.includes(randomNum)) {
//       randomArr.push(randomNum);
//     }
//   }
//   return randomArr;
// };

// console.log(sevenRandomNumbers());

//20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

// const reverseCountries = (countries) => {
//   let newCountries = [...countries];
//   return newCountries.reverse();
// };

// console.log(reverseCountries(countries));
