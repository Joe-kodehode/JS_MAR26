// Lesson 4: Functions in JavaScript

// A function is a block of code designed to do one specific task. It lets you write code once and reuse it, keeping your program clean and organized. However, the function won't do anything until you call it.

// ---------------------------------------------------
// Section 1: Function Declarations (aka function statements) and Hoisting
// ---------------------------------------------------

// A regular function, can be called before it's creation, due to hoisting

function sayHello() {
  // Code that we want to run when we call the function goes here, between the curly brackets!
  console.log("Hello World!");
}

// Function call
sayHello();

// ---------------------------------------------------
// Section 2: Arrow Functions (introduced in ES6, great for short, inline functions)
// ---------------------------------------------------

// An arrow function expression. Can't use hoisting.
const arrowExample = () => {
  console.log("Hello from the arrow function!");
};

// Calling the arrow function
arrowExample();

// ---------------------------------------------------
// Section 3: Return Statements and Scope
// ---------------------------------------------------

function returnExample() {
  const myMessage = "This function returns this string";
  return myMessage;
}

const returnedData = returnExample();
console.log(returnedData);

// ---------------------------------------------------
// Section 4: Functions with Parameters
// ---------------------------------------------------

// Example 1 - Hard Coding

function add() {
  return 3 + 4;
}

console.log(add());

// Example 2 - Soft coding (dynamic)

function minus(num1, num2) {
  return num1 - num2;
}

console.log(minus(100, 50));
console.log(minus(30, 1));
const returnedNum = minus(67, 43);

let multipliedNum = returnedNum * 2;

console.log(multipliedNum);

// Example 3
// Greeter function that uses parameters and template literals.

// Static or Dynamic?

const greeter = (time, name) => {
  return "Good" + " " + time + " " + name;
};

console.log(greeter("Morning", "Joe"));
console.log(greeter("Evening", "Bob"));

//Improved with Template literal
const greeter2 = (time, name) => {
  return `Good ${time} ${name}`;
};

console.log(greeter2("Morning", "Joe"));
console.log(greeter2("Evening", "Bob"));

// ---------------------------------------------------
// Section 5: Implicit Return in Arrow Functions
// ---------------------------------------------------

// Standard Arrow Function
// const adder = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(adder(10, 15));

// Same function with an implicit return
const adder = (num1, num2) => num1 + num2;
console.log(adder(10, 15));

// ---------------------------------------------------
// Section 6: Calculator Function Using Switch Statement
// ---------------------------------------------------

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Error, Invalid Operator";
  }
}

console.log(calculator(5, 1, "+"));
console.log(calculator(100, 2, "/"));
console.log(calculator(345, 22, "hello"));

// ---------------------------------------------------
// Section 7: Updating a Global Variable via a Function
// ---------------------------------------------------

// We're making a game and updating the players hp

let hp = 100;

const updateHp = (change, amount) => {
  if (change === "up") {
    hp += amount;
    if (hp > 200) hp = 200;
  } else if (change === "down") {
    hp -= amount;
    if (hp <= 0) {
      console.log("You died, try again!");
      hp = 100;
    }
  }
};

updateHp("down", 10);
console.log(hp);
updateHp("down", 50);
console.log(hp);
updateHp("down", 100);
console.log(hp);
updateHp("down", 100);
console.log(hp);

// 1) it's always 10hp - FIXED
// 2) my character has a max health of 200
// 3) my character should die and reset to 200 at 0 hp

// ---------------------------------------------------
// Section 8: Using Template Literals and Ternary Operator in a Function
// ---------------------------------------------------

const fruits = ["Banana", "Apple", "Pear", "Kiwi"];

// const checkItem = (fruit) => {
//   let included;

//   if (fruits.includes(fruit)) {
//     included = "does";
//   } else {
//     included = "doesn't";
//   }

//   return `The array ${included} include ${fruit}`;
// };

const checkItem = (fruit) =>
  `The array ${fruits.includes(fruit) ? "does" : "doesn't"} include ${fruit}`;

console.log(checkItem("Kiwi"));
console.log(checkItem("Apple"));
console.log(checkItem("Dragonfruit"));
