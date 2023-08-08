/************************     EXERCISE LEVEL 1     *************************/

let challenge = '30 Days of JavaScript'; //initial variable

console.log(challenge); //print the string
console.log(challenge.length); //print the length of the string
console.log(challenge.toUpperCase()); //change all the string characters to capital letters
console.log(challenge.toLowerCase()); //change all the string characters to lowercase
console.log(challenge.slice(3)); // slice out the phrase
console.log(challenge.includes('Script')); //check if the string contains "Script"
console.log(challenge.split()); //split the string into an array
console.log(challenge.split(' ')); //split the string at the space

let second = 'Faceboook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(second.split(',')); //split the string at the comma and change it into an array
console.log(challenge.replace('JavaScript', 'Python')); //change JavaScript to Python
console.log(challenge.charAt(15)); //check the character at index 15
console.log(challenge.charCodeAt('J')); //check the character code of J
console.log(challenge.indexOf('a')); //first occurrence of a
console.log(challenge.lastIndexOf('a')); //last occurrence of a

let third =
  'You cannot end a sentence with because because because is a conjunction';

console.log(third.indexOf('because')); // first occurrence of because
console.log(third.lastIndexOf('because')); // last occurrence of because
console.log(third.search('because')); // first occurrence of because with search

let fourth = ' 30 Days of JavaScript ';

console.log(fourth.trim()); //remove whitespace
console.log(challenge.startsWith(3)); //check if the string starts with 3
console.log(challenge.endsWith('t')); //check if the string ends with t
console.log(challenge.match(/a/g)); //find all a's

let fifth = '30 Days of';
let sixth = 'JavaScript';

console.log(fifth.concat(' ', sixth)); //merge two strings
console.log(challenge.repeat(2)); // print 2 times

/************************     EXERCISE LEVEL 2     *************************/

console.log(
  "'There is no exercise better for the heart than reaching down and lifting people up.' John Holmes"
); //print the quote
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
); //print the quote

console.log(typeof '10' === 10); //false
console.log(Number('10') == 10); //true

console.log(parseFloat('9.8') == 10); //false
console.log(Math.ceil(parseFloat('9.8')) == 10); //true

//check if both python and jargon has "on"
let str1 = 'pyhton';
let str2 = 'jargon';

if (str1.includes('on') && str2.includes('on')) {
  console.log('yes');
} else {
  console.log('no');
}

//check if the "jargon" is in the sentence
let sentence = 'I hope this course is not full of jargon.';

if (sentence.includes('jargon')) {
  console.log('yes');
} else {
  console.lgo('no');
}

//generate random number between 0-100 inclusively
console.log(Math.floor(Math.random() * 101));

//generate random number between 50-100 inclusively
console.log(Math.floor(Math.random() * 51) + 50);

//generate random number between 0-255 inclusively
console.log(Math.floor(Math.random() * 256));

//access the 'JavaScript' string characters using a random number.
let str = 'JavaScript';
let randomInd = Math.floor(Math.random() * str.length);
let randomChar = str[randomInd];
console.log(randomChar);

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

//index of because is 31

console.log(third.substring('31'));

/************************     EXERCISE LEVEL 2     *************************/

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let quote =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(quote.match(/love/gi).length);

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(third.match(/because/gi).length);

//Clean the following text and find the most frequent word

const sentence2 =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

//clean the sentence and split into words
let cleanSentence = sentence2.toLowerCase().replace(/[^a-z\s]/g, '');
let words = cleanSentence.split(/\s+/);

//count word occurrences
let wordCount = {};
for (const word of words) {
  if (word in words) {
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }
}

//find the most frequent word
let mostFrequent = '';
let maxFreq = 0;
for (let word in wordCount) {
  if (wordCount[word] > maxFreq) {
    mostFrequent = word;
    maxFreq = wordCount[word];
  }
}

console.log('clean sentence: ', cleanSentence);
console.log('most frequent word: ', mostFrequent);

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let incomeText =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

//to calculate we need salary*12 + annual bonus + online courses
//extracting the numbers
let numbers = incomeText.match(/\d+/g);
console.log('salary, bonus, courses: ', numbers);

let salary = parseInt(numbers[0]);
let bonus = parseInt(numbers[1]);
let courses = parseInt(numbers[2]);

let totalIncome = salary * 12 + bonus + courses * 12;

console.log('total income: ', totalIncome);
