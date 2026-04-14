// Lesson 7: JavaScript Loops

// A loop is a way to repeat code without writing it multiple times.

// Section 1: Why we use loops.

const names = ["Tom", "Eric", "Jessica", "Tom", "Eric", "Jessica"];

// Without a loop (repeating ourselves)

console.log(`Hei ${names[0]}`);
console.log(`Hei ${names[1]}`);
console.log(`Hei ${names[2]}`);
console.log(`Hei ${names[3]}`);
console.log(`Hei ${names[4]}`);
console.log(`Hei ${names[5]}`);
console.log(`Hei ${names[6]}`);
console.log(`Hei ${names[7]}`);
console.log(`Hei ${names[8]}`);

// With a loop (cleaner, scalable)
// for loop - 3 rules to the loop // where does the loop start // when does the loop end // how does the loop increase/decrease

for (let i = 0; i < names.length; i++) {
  console.log(`Hei ${names[i]}`);
}
//
// DRY - Don't repeat yourself!

//Section 2: The For Loop

for (let i = 0; i < 11; i += 2) {
  console.log(`Count: ${i}`);
}

for (let i = 10; i > 0; i--) {
  console.log(`Count: ${i}`);
}

// Section 3: Combining Loops with Functions and Methods

const people = ["aliCe", "   bob   ", "chaRlIe   ", "deBBy"];

function greetEveryone(array) {
  for (let i = 0; i < array.length; i++) {
    let name = array[i];

    name = name.trim().toLowerCase();

    console.log(`Hello, ${name}`);
  }
}

greetEveryone(people);
greetEveryone(names);

// Come back to this example!

// Section 4: The "for .. of" loop

const colors = ["red", "green", "blue"];
const snacks = ["smash", "safari", "superchips"];
const userNames = ["joe", "bill", "henry"];

// for..of  is used with arrays and works the same as a standard for loop, that starts at index 0, ends at arrayName.length and increments by 1 each loop.
// for (i = 0; i < colors.length; i++)

for (let color of colors) {
  console.log(color);
}

for (let snack of snacks) {
  console.log(snack);
}
for (let name of userNames) {
  console.log(name);
}

// Section 5: The "while" loop

let count = 5;

while (count <= 5) {
  console.log(count);
  count++;
}

// Guessing game using a while loop

// 0.000000000 - 0.99999999999
const randomNum = Math.floor(Math.random() * 10 + 1);

console.log(randomNum);

const secretNum = randomNum;
let guess = 0;

while (guess !== secretNum) {
  guess++;
  console.log(`Guessing: ${guess}`);
  if (guess === secretNum) {
    console.log(`Correct! The secret number was ${guess}`);
  }
}

// Section 6: Creating Arrays with Loops

function makeRandomArray(arrLength, range) {
  const randomNumArray = [];

  for (let i = 0; i < arrLength; i++) {
    const random = Math.floor(0.5 * range) + 1;
    randomNumArray.push(random);
  }

  return randomNumArray;
}

console.log(makeRandomArray(10, 100)); // 10 numbers between 1-100
console.log(makeRandomArray(20, 50)); // 20 numbers between 1-50

// Section 7: Finding the Biggest Number

function findMax(array) {
  let biggest = 0;
  for (let num of array) {
    console.log(`The current number is: ${num}`);
    if (num > biggest) {
      biggest = num;
    }
    console.log(`The current biggest is: ${biggest}`);
  }
  return biggest;
}

console.log(findMax([0, 5, 10, 4, 2]));
console.log(findMax(makeRandomArray(10, 100)));

// Section 8: Using Break and Continue

const moreNames = [
  "Tom",
  "Eric",
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Elisabeth",
  "Benny",
  "Oliver",
  "Andy",
  "Jenny",
  "Ashley",
  "Erin",
  "Patrick",
];

// Continue (skips current loop - Andy)
for (let firstName of moreNames) {
  if (firstName === "Andy") {
    continue; // Once we get to the continue, we skip to the next loop.
  }
  console.log(`Hi ${firstName}`);
}

// Break (end the loop when we get to Ashley)
for (let firstName of moreNames) {
  if (firstName === "Ashley") {
    break;
  }
  console.log(`Hi ${firstName}`);
}

// Section 9: Loop Practice Challenges

// Challenge 1: Log even numbers from 1 to 100

for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Challenge 2: Reverse an array using a loop

// using the reverse method

const reverseArray = (arr) => {
  return arr.reverse();
};

console.log(reverseArray(["a", "b", "c", "d"]));

// creating our own version of the reverse method

const reverseArr = (arr) => {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log(reverseArr(["a", "b", "c", "d"]));
