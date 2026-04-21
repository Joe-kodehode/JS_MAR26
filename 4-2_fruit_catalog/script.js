// Fruit catalog project

const fruits = [
  { name: "Apple", color: "Red", calories: 52, pricePerKg: 3.5, origin: "USA" },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    origin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    origin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    origin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    origin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    origin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    origin: "Costa Rica",
  },
];

// Create a container to hold all our fruit cards
// 1. create a new div
const container = document.createElement("div");
// 2. give it the class "fruit-catalog"
container.classList.add("fruit-catalog");
// 3. append it to the body
document.body.append(container);

for (fruit of fruits) {
  // create a div to hold our img/h2/p
  const card = document.createElement("div");
  // give it a class
  card.classList.add("fruit-card");
  // create a title (h2)
  const title = document.createElement("h2");
  // give our h2 some text
  title.textContent = fruit.name;

  // create an img
  const image = document.createElement("img");
  // give it a src
  image.src = `images/${fruit.name}.jpg`;
  // give it an alt
  image.alt = fruit.name;
  // give it a class of "fruit-image"
  image.classList.add("fruit-image");
  // append it to the card

  // add info paragraph
  const info = document.createElement("p");
  info.textContent = `Color: ${fruit.color}, Origin: ${fruit.origin}`;
  info.classList.add("fruit-info");

  // add nutrition paragraph
  const nutrition = document.createElement("p");
  nutrition.textContent = `Calories: ${fruit.calories} per 100g`;
  nutrition.classList.add("fruit-nutrition");

  // add price paragraph
  const price = document.createElement("p");
  price.textContent = `Price: ${fruit.pricePerKg} kr/kg`;
  price.classList.add("fruit-price");

  // Append all the newly created elements to the card
  card.append(title, image, info, nutrition, price);

  // Randomly put items on sale.
  const onSale = Math.random() >= 0.5;
  console.log(onSale);

  if (onSale) {
    // if onSale is true, make a new p tag to hold the sale price.
    const salePrice = document.createElement("p");
    // Cut the price in half if onSale is true
    salePrice.textContent = `SALE! ${(fruit.pricePerKg / 2).toFixed(2)} kr/kg`;
    // Set the price color to red if onSale is true
    salePrice.classList.add("sale-price");
    // Append our sale price to the card
    card.append(salePrice);
    // Keep the original price, but give it a strikethough and light grey
    price.classList.add("strikethrough");
  }

  // Append the card to the container
  container.append(card);
}
