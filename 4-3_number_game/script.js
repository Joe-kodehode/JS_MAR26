// Declare variables on a global scope rather than inside of functions. This way they are accessable in multiple functions
let guessedNumbers, totalGuesses, randomNumber;

// Targeting // cache the DOM elements
const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const guessesLeftParagraph = document.getElementById("guessesLeft");
const previousGuessesParagaph = document.getElementById("previousGuesses");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");

// Function to initialize or restart the game

function initGame() {
  // generate a random num between 1-100
  randomNumber = Math.floor(Math.random() * 100) + 1;
  // reset totalGuess variable to 10
  totalGuesses = 10;
  // reset guessedNumbers array
  guessedNumbers = [];
  // empty feedback p
  feedback.textContent = "";
  // reset guessesLeft p
  guessesLeftParagraph.textContent = `Guesses Left: ${totalGuesses}`;
  // empty previousGuesses p
  previousGuessesParagaph.textContent = "";
  // hide restart game button
  restartButton.hidden = true;
  // Enable guess button
  guessButton.disabled = false;
  // empty guess input
  guessInput.value = "";
}

// Function to update the game based on the user's guess.
function checkGuess() {
  // Get the number the user typed into the input
  const userGuess = Number(guessInput.value);
  // Push the users current guess to the guessedNumbers array
  guessedNumbers.push(userGuess);
  // Update the 'previous guesses' p
  previousGuessesParagaph.textContent = `Previously Guessed Numbers: ${guessedNumbers.join(", ")}`;
  // Decrease total guesses by 1
  totalGuesses--;

  const difference = Math.abs(userGuess - randomNumber);

  // Check if the guess is correct, if not update the feedback with close, too high or too low.
  if (userGuess === randomNumber) {
    feedback.textContent = `Congratulations! You got it right. The number was ${randomNumber}`;
    endGame();
    return;
  } else if (difference <= 5) {
    feedback.textContent = "You're within 5!";
  } else if (userGuess < randomNumber) {
    feedback.textContent = "Too low! Try a higher number!";
  } else {
    feedback.textContent = "Too high! Try a lower number!";
  }

  // Update the guessesLeft p
  guessesLeftParagraph.textContent = `Guesses Left: ${totalGuesses}`;

  // End the game if no guesses remain
  if (totalGuesses === 0) {
    feedback.textContent = `Game over! No guesses left, the number was: ${randomNumber}`;
    endGame();
  }
}

// Function that runs when the user wins or loses the game.
function endGame() {
  guessButton.disabled = true;
  restartButton.hidden = false;
}

guessButton.addEventListener("click", checkGuess);
