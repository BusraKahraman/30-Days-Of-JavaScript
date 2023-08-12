/************************     EXERCISE LEVEL 1     *************************/

//1. Create an empty object called dog

// const dog = {};

//2. Print the the dog object on the console

// console.log(dog);

//3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

// const dog = {
//   name: 'Lucky',
//   legs: 4,
//   color: 'brown',
//   age: 2,
//   bark: function () {
//     return 'woof woof';
//   },
// };

//4. Get name, legs, color, age and bark value from the dog object

// console.log(
//   'name:',
//   dog.name,
//   '\nlegs:',
//   dog.legs,
//   '\ncolor:',
//   dog.color,
//   '\nage:',
//   dog.age,
//   '\nbark:',
//   dog.bark()
// );

//5. Set new properties the dog object: breed, getDogInfo

// dog.breed = 'Dachshund';
// dog.getDogInfo = function () {
//   return `${this.name} is a ${this.color} ${this.breed}. \nShe's ${
//     this.age
//   } and has ${this.legs} legs. And she barks like ${this.bark()}`;
// };

// console.log(dog.getDogInfo());

/************************     EXERCISE LEVEL 2     *************************/

// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'Redux',
//       'MongoDB',
//       'Express',
//       'React',
//       'Node',
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'MongoDB',
//       'Express',
//       'React',
//       'Node',
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

//1. Find the person who has many skills in the users object.

// const maxSkill = () => {
//   let maxSkills = 0;
//   let userWithMaxSkills = null;

//   for (const user in users) {
//     const userSkills = users[user].skills.length;
//     if (userSkills > maxSkills) {
//       maxSkills = userSkills;
//       userWithMaxSkills = user;
//     }
//   }

//   return userWithMaxSkills;
// };

// console.log(maxSkill());

//2. Count logged in users, count users having greater than equal to 50 points from the following object.

// const loggedIn = () => {
//   let count = 0;
//   for (const user in users) {
//     let isLoggedIn = users[user].isLoggedIn;
//     if (isLoggedIn) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(loggedIn());

// const points = () => {
//   let count = 0;
//   for (const user in users) {
//     let userPoints = users[user].points;
//     if (userPoints >= 50) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(points());

//3. Find people who are MERN stack developer from the users object

// const developer = () => {
//   const mernDevelopers = [];
//   for (user in users) {
//     let userSkills = users[user].skills;
//     if (
//       userSkills.includes('MongoDB') &&
//       userSkills.includes('Express') &&
//       userSkills.includes('React') &&
//       userSkills.includes('Node')
//     ) {
//       mernDevelopers.push(user);
//     }
//   }
//   return mernDevelopers;
// };

// console.log(developer());

//4. Set your name in the users object without modifying the original users object

// users.Busra = {
//   email: 'busra@busra.com',
//   skills: ['HTML', 'CSS', 'JavaScript'],
//   age: 27,
//   isLoggedIn: true,
//   points: 45,
// };

// console.log(users);

//5. Get all keys or properties of users object

// const keys = Object.keys(users);
// console.log(keys);

// for (const user in users) {
//   if (users[user].hasOwnProperty('skills')) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

//6. Get all the values of users object

// const values = Object.values(users);
// console.log(values);

//7. Use the countries object to print a country name, capital, populations and languages.

// for (const country of countries) {
//   console.log(
//     'name: ',
//     country.name,
//     '\ncapital: ',
//     country.capital,
//     '\npopulation',
//     country.population,
//     '\nlanguages: ',
//     country.languages
//   );
// }

/************************     EXERCISE LEVEL 3     *************************/

//1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// const personAccount = {
//   firstName: 'Jane',
//   lastName: 'Doe',
//   incomes: [],
//   expenses: [],
//   totalIncome: function () {
//     let total = 0;
//     for (const income of this.incomes) {
//       total += income.amount;
//     }
//     return total;
//   },
//   totalExpense: function () {
//     let total = 0;
//     for (const expense of this.expenses) {
//       total += expense.amount;
//     }
//     return total;
//   },
//   accountInfo: function () {
//     return `Name: ${this.firstName}\nLastName: ${
//       this.lastName
//     }\nTotal income: ${this.totalIncome()}\nTotal expenses: ${this.totalExpense()}`;
//   },
//   addIncome: function (description, amount) {
//     this.incomes.push({ description, amount });
//   },
//   addExpense: function (description, amount) {
//     this.expenses.push({ description, amount });
//   },
//   accountBalance: function () {
//     return this.totalIncome() - this.totalExpense();
//   },
// };

// personAccount.addIncome('Salary', 5000);
// personAccount.addExpense('Rent', 1000);
// personAccount.addExpense('Groceries', 200);

// console.log(personAccount.accountInfo());

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
];

//2. Imagine you are getting the above users collection from a MongoDB database.
//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

// const signUp = (newUser) => {
//   const existingUser = users.find((user) => user.email === newUser.email);

//   if (existingUser) {
//     return 'user already exist';
//   }

//   users.push(newUser);
//   return 'user added';
// };

// const newUser = {
//   _id: 'sfs123',
//   username: 'Busra',
//   email: 'busra@busra.com',
//   password: '12315',
//   createdAt: '',
//   isLoggedIn: true,
// };

// console.log(signUp(newUser));
// console.log(users);

//b. Create a function called signIn which allows user to sign in to the application

// const signIn = (email, password) => {
//   const user = users.find(
//     (user) => user.email === email && user.password === password
//   );

//   if (user) {
//     user.isLoggedIn = true;
//     return 'User signed in';
//   }

//   return 'invalid email or password';
// };

// console.log(signIn('asab@asab.com', '123456'));
// console.log(signIn('martha@martha.com', 'wrongpassword'));

//3. The products array has three elements and each of them has six properties.
//a. Create a function called rateProduct which rates the product

// const rateProduct = (productId, userId, rating) => {
//   const product = products.find((product) => product._id === productId);

//   if (product) {
//     const existingRating = product.ratings.find((r) => r.userId === userId);
//     if (existingRating) {
//       existingRating.rate = rating;
//       return 'rating updated';
//     } else {
//       product.ratings.push({ userId, rate: rating });
//       return 'rating added';
//     }
//   }

//   return 'product not found';
// };

// console.log(rateProduct('eedfcf', 'ab12ex', 4));
// console.log(rateProduct('invalidId', 'ab12ex', 3));
// console.log(rateProduct('hedfcg', 'fg12cy', 4.5));

//b. Create a function called averageRating which calculate the average rating of a product

// const averageRating = (productId) => {
//   const product = products.find((product) => product._id === productId);

//   if (product && product.ratings.length > 0) {
//     let sum = 0;
//     for (const rating of product.ratings) {
//       sum += rating.rate;
//     }
//     return sum / product.ratings.length;
//   } else {
//     return 'no ratings available';
//   }
// };

// console.log(averageRating('eedfcf'));
// console.log(averageRating('invalidId'));

//4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// const likeProduct = (productId, userId) => {
//   const product = products.find((product) => product._id === productId);

//   if (product) {
//     const existingLike = product.likes.findIndex((like) => like === userId);

//     if (existingLike !== -1) {
//       product.likes.splice(existingLike, 1);
//       return 'unliked';
//     } else {
//       product.likes.push(userId);
//       return 'liked';
//     }
//   }

//   return 'invalid';
// };

// console.log(likeProduct('hedfcg', 'fg12cy'));
// console.log(likeProduct('eedfcf', 'fg12cy'));
