// Lesson 5: Javascript Methods

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings, numbers or arrays. It lets you do something with that data—like change it, check it, copy or access part of it.

// ----------------
// Section 1.1: String Methods
// ----------------

const text = "   Hello, JavaScript World World!   ";

console.log(text.trim()); // removes whitespace from both ends of a string (does not alter the original)
console.log(text.toUpperCase()); // converts the string to uppercase
console.log(text.toLowerCase()); // converts the string to lowercase
console.log(text.indexOf("JavaScript")); // returns the starting index of a word or character in a string.
console.log(text.slice(3, 8)); // extracts characters from index 3 to 8, the start is included, the end is excluded. Does not alter the original.
console.log(text.replace("World", "Universe")); // replaces the first instance of the word "World" with "Universe"
console.log(text.replaceAll("World", "Universe")); // replaces ALL instances of the word "World" with "Universe"
console.log(text.charCodeAt(3)); // returns the unicode value of the character at the given index
console.log(text.repeat(3));
console.log(text.length); // returns the length of the string

// ----------------
// Section 1.2: Converting a string into an array
// ----------------
console.log(text.trim().split(" ")); // splits the string into an array of substrings by spaces

// ----------------
// Section 1.3: Converting a String to a Number
// ----------------
let numericString = "123.45xyz";

console.log(Number(numericString)); // converts entire string into a number, returns NaN if there is text in the string
console.log(parseFloat(numericString)); // converts entire string into a number, even if there is text - the text is removed.
console.log(parseInt(numericString)); // converts the Int into a number but does not include decimal, even if there is text - the text is removed.

// ----------------
// Section 2.1: Array Methods
// ----------------

const colors = ["Red", "Green", "Blue"];

console.log(colors.length); // returns the number of elements in the array

colors.push("Yellow");
console.log(colors); // adds yellow to the end of the array, alters the original

colors.pop();
console.log(colors); // removes the last element in the array, alters the original
// const lastColor = colors.pop();
// console.log(lastColor);

console.log(colors.shift()); // removes the first element in the array, alters the original

colors.unshift("Purple");
console.log(colors); // adds purple to the beginning of the array, alters the original

console.log(colors.includes("Purple")); // returns true or false if the given data is an element in the array

const newColors = colors.toSpliced(2, 1, "Orange", "Pink");
console.log(newColors); // Removes elements from the array. (start index, amount removed, replaced by). Does NOT alter the original!

colors.splice(2, 1, "Orange", "Pink");
console.log(colors); // Does the same as toSpliced but DOES alter the original!

let unsortedArray = [3, 1, 4, 1, 5, 9, 4];

let sortedArray = unsortedArray.toSorted();
console.log(sortedArray); // sorts the array, does NOT affect the original

unsortedArray.sort();
console.log(unsortedArray); // sorts the array, DOES affect the original

const reversedArray = sortedArray.toReversed();
console.log(reversedArray); // reverses the array and returns a new array, does NOT affect the original

sortedArray.reverse();
console.log(sortedArray); // reverses the array and returns a new array, DOES affect the original

console.log(sortedArray.at(4)); // accesses the last element using a positive index
console.log(sortedArray.at(-3)); // accesses the last element using a negative index

// ----------------
// 2.2: turning an array into a string
// ----------------
console.log(colors.join(" "));

// ----------------
// Section 3: Number Methods
// ----------------

const myNum = 3.1415926;

console.log(myNum.toFixed(2)); // returns a string representing myNum rounded down to 2 decimal places

console.log(myNum.toExponential()); // returns a string with myNum in an exponential notation

// ----------------
// 3.1 Convert a number into a string
// ----------------
console.log(myNum.toString()); // Converts a number into a string

console.log(typeof myNum);

// ----------------
// Section 4: Chaining Methods Together
// ----------------

// Example1 1: Chaining String Methods
const rawString = "    JavaScript is Fun!!   ";
const processedString = rawString
  .trim()
  .replace("Fun", "Awesome")
  .toUpperCase();

console.log(processedString);

// Example 2: Chaning Array Methods
const words = ["Hello", "World"];
const messageFromArray = words.join(" ").toUpperCase();
console.log(messageFromArray);

// Example 3: Chaining with a Number
const chainedNum = myNum.toFixed(2).toString().repeat(5);
console.log(chainedNum);

console.log(words.join(" ").toUpperCase().split(" "));
