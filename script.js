// Lesson 8: Objects

// Section 1: What is an Object?

// An object is a datatype that stores related data using key-value pairs.

const person = {
  name: "Alice",
  age: 28,
  job: "Designer",
};

console.log(person); // log the entire object
console.log(person.age); // access with dot notation
console.log(person["age"]); // access with bracket notation

// Dot vs bracket:
// You can use dot notation when you know the key name at the code time : person.name

// Use bracket notation when the key is dynamic or not a valid identifier: person[key]

// Section 2: Creating, Modifying and Deleting Object Keys/Values

person.country = "Norway"; // add new key/value
person.age = 29; // updating an existing key/value
delete person.country; // remove an existing key
console.log(person);

// Section 3: Looping though an Object using 'for in' loop

const user = {
  name: "Joe",
  age: 38,
  location: "Stavanger",
  hobbies: "Gaming",
};

// a "for in" loop is similar to a "for of" loop. But it loops over an object and targets the keys.
for (let key in user) {
  console.log(key); // key will store a different key each loop, the loop will go over the entire object.
  console.log(user[key]); // Dynamic key access
}

// Dynamic key access is useful when you don't know the property name (key name) in advance, like when looping through an object.

// Section 4: Nested Objects and Arrays

const userData = {
  firstName: "Olav",
  lastName: "Hansen",
  age: 31,
  isMale: true,
  hobbies: ["Golf", "Hiking", "Cinema"],
  address: {
    streetName: "Solskinnsgaten",
    streetNumber: 39,
    postCode: 4050,
  },
};

console.log(userData.address.postCode);

// Section 5: Array of Obects (object arrays)

const products = [
  {
    productName: "Shirt",
    productId: 56,
    stock: 5,
  },
  {
    productName: "Pants",
    productId: 3,
    stock: 0,
  },
  {
    productName: "Socks",
    productId: 99,
    stock: 658,
  },
];

console.log(products[2]);

// We can loop over our array of objects and create a dynamic message for our user displaying the name, id and stock of each product.
for (let product of products) {
  console.log(
    `${product.productName}, ID number: ${product.productId}, has ${product.stock} left in stock`,
  );
}

// Section 6: Descriptive Sentences with Objects

const people = [
  {
    name: "Thomas",
    isMale: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    isMale: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    isMale: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts", "latte and hot chocolate"],
  },
  {
    name: "Avery",
    isMale: true,
    age: 28,
    hobbies: ["coding", "games", "memes", "annoying joe"],
  },
  {
    name: "Phillip",
    isMale: true,
    age: 24,
    hobbies: [
      "boxing",
      "wrestling",
      "mma",
      "eating loads of cake",
      "programming",
    ],
  },
  {
    name: "Otto",
    isMale: true,
    age: 36,
    hobbies: ["movies", "cinema", "music", "Warhammer"],
  },
  {
    name: "Annabelle",
    isMale: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    isMale: false,
    age: 18,
    hobbies: ["design", "drawing"],
  },
];

// Let's write a 'for of' loop which console.log the persons name, age, if they are a man or woman, a random hobby.

// For example: "Cathy is an 18 year old woman who enjoys drawing"

for (let person of people) {
  // let maleOrFemale;

  // if (person.isMale === true) {
  //   maleOrFemale = "man";
  // } else {
  //   maleOrFemale = "woman";
  // }

  let pronoun = person.isMale ? "man" : "woman";
  // Creating a random number between 0-2
  let ranNum = Math.floor(Math.random() * person.hobbies.length);

  console.log(
    `${person.name} is ${person.age} years old, a ${pronoun} who enjoys ${person.hobbies[ranNum]}`,
  );
}
