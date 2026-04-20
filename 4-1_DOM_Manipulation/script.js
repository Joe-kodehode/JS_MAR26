// DOM Manipulation

// Section 1: What is the DOM?

// The DOM (Document Object Model) is how JavaScript interacts with HTML on a web page.
// It turns your HTML into a structure of objects you can access and change using JS.

// Section 2: Targeting existing HTML Elements in JavaScript.

const button = document.getElementById("my-button"); // Targets the button with id of "my-button" and stores it in the button variable.

// Using querySelector we can target an element on the page in multiple ways.
const heading = document.querySelector("#my-heading"); // using ID
// const heading = document.querySelector(".my-heading"); // using Class
// const heading = document.querySelector("h1"); // using element name

const listItem = document.querySelector("li"); // if there are multiple elements on the page, querySelector will use the first one.

const listItems = document.querySelectorAll("li");

console.log(listItems);

// Section 3: Changing Text or HTML Content

heading.textContent = "Welcome to the DOM Manipulation lesson!";

// document.querySelector("#my-heading").textContent = "Welcome to the DOM Manipulation lesson!";

heading.innerHTML = "<span>DOM Manipulation</span>";

// ⚠️ Security Warning:
// Be careful when using innerHTML with content that comes from the user or an external source.
// As a general rule, always use textContent where possible.
// It can create a security risk called XSS (Cross-Site Scripting).
// Always use textContent if you're not intentionally adding HTML tags.

// Section 4: Changing styles

heading.style.fontSize = "36px";
heading.style.color = "blue";
heading.style.textTransform = "uppercase";
setInterval(() => {
  heading.style.color = `hsl(${Math.floor(Math.random() * 255)},100%,50%)`;
}, 400);

// Section 5: Creating and Adding new Elements

// Create a new <p> tag
const newParagraph = document.createElement("p");
const newParagraph2 = document.createElement("p");

// Set the text content of our new newParagraph
newParagraph.textContent = "I'm a brand new paragraph, made in JS";
newParagraph2.textContent = "I'm a brand new paragraph, made in JS";

// Style our paragraph using JS.
newParagraph.style.color = "blue";

// Apply a CSS class to our new paragraph
newParagraph.classList.add("underline");
newParagraph2.classList.add("underline");

// Append our new paragraph to the HTML.
// document.body.appendChild(newParagraph);
// document.body.appendChild(newParagraph2);

document.body.append(newParagraph, newParagraph2);

// append vs appendChild
// - appendChild() only accepts **DOM nodes** (elements)
// - append() can accept **DOM nodes OR text**, and also multiple things at once

// Create an image and add attributes
const newImage = document.createElement("img");
newImage.setAttribute("src", "/apple.jpg");

newImage.alt = "a juicy red apple";
newImage.src = "/apple.jpg";
newImage.width = "200";

document.body.append(newImage);

// 📌 setAttribute vs classList.add:
// setAttribute("class", "one two") → sets or replaces all classes
// classList.add("extra") → adds a class without removing others

// Adding an element to the beginning of the body
// 1. Create the element
const firstParagraph = document.createElement("p");
// 2. Add some spice (textContent, class etc)
firstParagraph.textContent = "I was added to the top of the page!";
// 3. Send it to the HTML
document.body.prepend(firstParagraph);

// Insert an element somewhere in the middle of the body
const midParagraph = document.createElement("p");
midParagraph.textContent = "I'm in the middle!";

// target the element you want to insert before
target = document.querySelector("p:nth-of-type(2)");

// Inserting the created element before the targeted element
document.body.insertBefore(midParagraph, target);

// 📌 Summary of placement methods:
// append() → adds to the end
// prepend() → adds to the beginning
// insertBefore(newNode, referenceNode) → inserts before a specific node

// 🧠 What is a DOM node?
// A DOM node is any single part of the document tree:
// - An element (like <p> or <div>)
// - A text node (plain text)
// - A comment node (<!-- like this -->)
// Most of the time, when you're working with elements, you're using element nodes.

// Add a new list item to an existing list.

// 1. create the element
const newLi = document.createElement("li");
// 2. set the content
newLi.textContent = "Item 3";
// 3. add the "list-item" class
newLi.classList.add("list-item");
// 4. append the li to the ul  // list-1
const list = document.querySelector("#list-1");

list.append(newLi);

// Section 6: Removing Elements

const firstListItem = document.querySelector("li");
// list.removeChild(firstListItem);
firstListItem.remove();

// Section 7: Parent/Child relationships
console.log(list.parentElement);
console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);

// Section 8: classList methods

const box = document.querySelector(".box");

// Add a class
box.classList.add("active");

// Toggle a class (add if missing.   remove if present)
box.classList.toggle("dark");

// MAKE A BUTTON TO TOGGLE DARK

// Check if an element has a class
console.log(box.classList.contains("active")); // true or false

// Section 9: Creating a new List using a Loop

const favoriteMovies = [
  "The Matrix",
  "Steven Universe",
  "Lion King",
  "Tucker & Dale vs Evil",
  "Lord of the Rings",
];

// 1. Make a heading, give it text content and append it to the html
const movieHeading = document.createElement("h2");
movieHeading.textContent = "My fav movies";
document.body.append(movieHeading);

// 2. create the ul
const movieUl = document.createElement("ul");

// 3. create the Loop
for (let movie of favoriteMovies) {
  // 4. inside the loop, create an li
  const movieLi = document.createElement("li");

  // 5. add a class to the li
  movieLi.classList.add("movie-li");

  // 6. inside the loop, set the text of the li
  movieLi.textContent = movie;

  // 7. inside the loop, append the li to the ul
  movieUl.append(movieLi);
}

// 8. after the loop, append the ul to the body
document.body.append(movieUl);
