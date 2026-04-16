// Lesson 9: Loops & Objects Recap

// Section 1: Looping through arrays

const fruitNames = ["Apple", "Banana", "Mango", "Grapes", "Pear"];

console.log(fruitNames.length);

// the 'for' loop allows the possibility to change starting index, when we end the loop and how we increment the loop.

for (let i = 0; i < fruitNames.length; i++) {
  console.log(fruitNames[i]);
}

//the 'for of' loop, loops over ALL elements in an array. Does not have access to start/end/increment like a regular for loop does.

for (let fruit of fruitNames) {
  console.log(fruit);
}

// Section 2: Looping with Conditions

const numbers = [12, 5, 8, 130, 44, 3, 22];

for (number of numbers) {
  if (number < 10) continue;
  if (number > 100) break;

  console.log(number);
}

// Section 3: The While Loop (Guessing Game)

// random number between 1-10

// 0.000000000 - 0.999999999
let guess = 0;
let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

while (guess !== randomNumber) {
  guess++;
  console.log(`Guessing: ${guess}`);
  if (guess === randomNumber) {
    console.log(
      `Congratulations, you guessed correctly! The number was: ${guess}`,
    );
  }
}

// Section 4: Basic Objects

// Key value pairs

const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
};
console.log(book);

// Adding a new key value pair to an existing object
// published in 1937
book.published = 1937;

// Update pages to 320
book.pages = 320;
// Update pages to add 10
book.pages += 10;

console.log(book);

// dot notation and bracket notation
console.log(book.title);

// Bracket notation can be useful when you don't know the key / are looping over the object with a 'for in' loop.
console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);

// Section 5: Looping through an Object using dynamic keys.

for (let key in book) {
  console.log(key);
  console.log(book[key]);
}

// Section 6: Array of Objects (Object array)

const fruits = [
  {
    name: "Apple",
    color: "Red",
    calories: 52,
    pricePerKg: 3.5,
    countryOfOrigin: "USA",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    countryOfOrigin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    countryOfOrigin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    countryOfOrigin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    countryOfOrigin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 1,
    countryOfOrigin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    countryOfOrigin: "Costa Rica",
  },
];

// Describe each fruit using a loop.

// What type of loop shall we use?

for (let fruit of fruits) {
  console.log(
    `${fruit.name} is a ${fruit.color} fruit, from ${fruit.countryOfOrigin}.`,
  );
  // console.log(fruit.name);
  // console.log(fruit.color);
  // console.log(fruit.countryOfOrigin);
}

// Apple is a red fruit from USA.
// Banana is a yellow fruit from Ecuador.

// Section 7: Find the cheapest fruit

// DRY - Don't repeat yourself - USE A LOOP!

let cheapest = Infinity;
let fruitName;

// if (fruits[0].pricePerKg < cheapest) {
//   cheapest = fruits[0].pricePerKg;
// }
// if (fruits[1].pricePerKg < cheapest) {
//   cheapest = fruits[1].pricePerKg;
// }
// if (fruits[2].pricePerKg < cheapest) {
//   cheapest = fruits[2].pricePerKg;
// }
// if (fruits[3].pricePerKg < cheapest) {
//   cheapest = fruits[3].pricePerKg;
// }
// if (fruits[4].pricePerKg < cheapest) {
//   cheapest = fruits[4].pricePerKg;
// }
// if (fruits[5].pricePerKg < cheapest) {
//   cheapest = fruits[5].pricePerKg;
// }
// if (fruits[6].pricePerKg < cheapest) {
//   cheapest = fruits[6].pricePerKg;
// }

for (let fruit of fruits) {
  if (fruit.pricePerKg < cheapest) {
    cheapest = fruit.pricePerKg;
    fruitName = fruit.name;
  }
}

console.log(
  `The cheapest fruit is: ${fruitName} with a price of ${cheapest}kr per kg`,
);

// Section 8: Adding and Removing properties in a Loop

// Add a "good" property to every fruit
for (let fruit of fruits) {
  fruit.good = true;
  delete fruit.good;
}

console.log(fruits);

// Section 9: Object inside a Function

function describeFruit(fruit) {
  return `${fruit.name} contains ${fruit.calories} calories per 100g and costs ${fruit.pricePerKg} kr. per kg`;
}

console.log(describeFruit(fruits[0]));
console.log(describeFruit(fruits[4]));

// Summary

// ✅ Use loops to repeat tasks or go through arrays and objects.
// ✅ for...of is great for typical arrays;
// ✅ for...in is used for object keys.
// ✅ Objects store data in key-value pairs.
// ✅ Arrays can contain multiple objects. (Object arrays)
// ✅ Loops can combine with logic, conditions, and functions.
// ✅ You can add, modify, or delete properties dynamically.
